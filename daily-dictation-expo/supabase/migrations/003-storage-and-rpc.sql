-- Audio storage bucket: public read, service_role write only
insert into storage.buckets (id, name, public) values ('audio', 'audio', true);

create policy "Public read audio" on storage.objects
  for select using (bucket_id = 'audio');

create policy "Service role only write audio" on storage.objects
  for insert with check (bucket_id = 'audio' and auth.role() = 'service_role');

create policy "Service role only delete audio" on storage.objects
  for delete using (bucket_id = 'audio' and auth.role() = 'service_role');

-- RPC: increment exercises completed (uses auth.uid() — no user_id param to prevent abuse)
create or replace function increment_exercises_completed()
returns void as $$
  update profiles
  set total_exercises_completed = total_exercises_completed + 1,
      updated_at = now()
  where id = auth.uid();
$$ language sql security definer;
