import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function respond(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (request: Request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (request.method !== "POST") {
    return respond({ error: "Method not allowed." }, 405);
  }

  let username: string;
  let password: string;
  try {
    const body = await request.json();
    username = typeof body.username === "string" ? body.username.trim().toLowerCase() : "";
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return respond({ error: "Invalid username or password." }, 400);
  }

  if (!/^[a-z0-9_]{3,24}$/.test(username) || password.length === 0 || password.length > 256) {
    return respond({ error: "Invalid username or password." }, 400);
  }

  const projectUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const publicKey = Deno.env.get("SUPABASE_ANON_KEY") ??
    Deno.env.get("SUPABASE_PUBLISHABLE_KEY");
  if (!projectUrl || !serviceRoleKey || !publicKey) {
    console.error("Username login is missing required Supabase environment variables.");
    return respond({ error: "Username login is not configured." }, 500);
  }

  const adminClient = createClient(projectUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const authClient = createClient(projectUrl, publicKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  try {
    const { data: profile, error: profileError } = await adminClient
      .from("profiles")
      .select("id")
      .eq("username", username)
      .maybeSingle();

    if (profileError) {
      console.error("Could not look up username profile:", profileError.message);
      return respond({ error: "Username login is not configured." }, 500);
    }

    const { data: userResult, error: userError } = profile
      ? await adminClient.auth.admin.getUserById(profile.id)
      : { data: { user: null }, error: null };
    if (userError) {
      console.error("Could not retrieve username account:", userError.message);
      return respond({ error: "Username login is not configured." }, 500);
    }

    const email = userResult.user?.email ?? `missing-${crypto.randomUUID()}@invalid.local`;
    const { data, error } = await authClient.auth.signInWithPassword({ email, password });
    if (error || !data.session) {
      return respond({ error: "Invalid username or password." }, 401);
    }

    return respond({
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
    });
  } catch (error) {
    console.error("Username login request failed:", error);
    return respond({ error: "Username login is temporarily unavailable." }, 500);
  }
});
