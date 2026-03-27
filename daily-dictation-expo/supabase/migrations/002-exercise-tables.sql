-- Exercise categories and exercises tables
-- exercises.chunks stores sentence-level audio segments as JSONB

create table public.exercise_categories (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  slug text not null unique,
  description text,
  display_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.exercises (
  id uuid default gen_random_uuid() primary key,
  category_id uuid references public.exercise_categories(id),
  title text not null,
  audio_url text not null,
  transcript text not null,
  cefr_level text not null check (cefr_level in ('A1','A2','B1','B2','C1')),
  difficulty integer check (difficulty between 1 and 5) default 1,
  duration_seconds integer,
  word_count integer,
  accent text default 'american',
  chunks jsonb not null default '[]'::jsonb,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.sessions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  exercise_id uuid references public.exercises(id) not null,
  user_answer text not null check (length(user_answer) <= 5000),
  accuracy_score decimal(5,2) default 0,
  correct_words integer default 0,
  total_words integer default 0,
  diff_result jsonb,
  replay_count integer default 0,
  speed_used decimal(3,2) default 1.0,
  started_at timestamptz default now(),
  completed_at timestamptz,
  created_at timestamptz default now()
);

-- RLS: categories + exercises are public read
alter table public.exercise_categories enable row level security;
create policy "Anyone can read categories" on public.exercise_categories
  for select using (true);

alter table public.exercises enable row level security;
create policy "Anyone can read active exercises" on public.exercises
  for select using (is_active = true);

-- RLS: sessions are owner-only
alter table public.sessions enable row level security;
create policy "Users can read own sessions" on public.sessions
  for select using (auth.uid() = user_id);
create policy "Users can insert own sessions" on public.sessions
  for insert with check (auth.uid() = user_id);

-- Indexes
create index idx_exercises_cefr_level on public.exercises(cefr_level, created_at desc);
create index idx_sessions_user_completed on public.sessions(user_id, completed_at desc);
