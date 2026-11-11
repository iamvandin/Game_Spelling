create table if not exists public.level_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  difficulty text not null check (difficulty in ('easy', 'medium', 'hard')),
  level integer not null check (level > 0),
  stars integer not null check (stars between 1 and 3),
  completed_at timestamptz not null default now(),
  primary key (user_id, difficulty, level)
);

alter table public.level_progress enable row level security;

drop policy if exists "Users can read their own level progress" on public.level_progress;
create policy "Users can read their own level progress"
  on public.level_progress
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can insert their own level progress" on public.level_progress;
create policy "Users can insert their own level progress"
  on public.level_progress
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own level progress" on public.level_progress;
create policy "Users can update their own level progress"
  on public.level_progress
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

grant select, insert, update on public.level_progress to authenticated;
