-- Profiles table: auto-created on user signup via trigger
-- Depends on: auth.users (Supabase built-in)

create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text,
  cefr_level text check (cefr_level in ('A1','A2','B1','B2','C1')) default 'A1',
  total_exercises_completed integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- RLS
alter table public.profiles enable row level security;

create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- Auto-create profile on signup: reads display_name and cefr_level from signUp metadata
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name, cefr_level)
  values (
    new.id,
    new.raw_user_meta_data->>'display_name',
    coalesce(new.raw_user_meta_data->>'cefr_level', 'A1')
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
