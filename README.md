# Spelly the Bear's Spelling Adventure

Static spelling game hosted on Vercel, with Supabase email/password accounts.
Players register with a username, email, and password, then log in with either
their username or email and password.

## Set up username authentication

1. In the Supabase SQL Editor, run
   `supabase/migrations/20261111000000_username_profiles.sql`.
   It creates a private `profiles` table and a trigger that saves a unique,
   lowercase username for each new account. It also lets a signed-in user read
   only their own profile so the game can display the username in its navbar.
2. Run
   `supabase/migrations/20261111000100_user_level_progress.sql`.
   It creates per-user progress storage with row-level security so each account
   can read and update only its own completed levels and stars.
3. Install and log in to the [Supabase CLI](https://supabase.com/docs/guides/cli),
   then link this folder to your project:

   ```sh
   supabase login
   supabase link --project-ref YOUR_PROJECT_REF
   supabase functions deploy login-with-username
   ```

   The function uses Supabase's `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`,
   and `SUPABASE_ANON_KEY` environment variables. If your project does not
   provide `SUPABASE_ANON_KEY` to Edge Functions, add the project's anon or
   publishable key as the `SUPABASE_ANON_KEY` function secret. Never put the
   service-role key in the browser or commit it to this repository.
4. Configure Supabase Authentication's site URL and redirect URLs to include
   the deployed Vercel URL. Email confirmation can remain enabled.
5. Deploy the project to Vercel and test registration, email confirmation,
   email login, username login, logout, and level progress on two accounts.

Usernames are case-insensitive and must be 3–24 letters, numbers, or
underscores. Existing accounts created before this migration can continue to
log in with email; they do not have a username until one is assigned.
Completed-level progress is stored per Supabase account, not shared through
browser local storage. Previously completed levels saved only in local storage
are not automatically assigned to an account.

## Project files

- `index.html` — page structure and authentication form.
- `style.css` — game and authentication styles.
- `script.js` — game logic and Supabase client authentication.
- `supabase/` — database migration and username-login Edge Function.
