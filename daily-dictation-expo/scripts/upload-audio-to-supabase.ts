/**
 * Bulk upload MP3 files from data-simulator to Supabase Storage.
 * Source: data-simulator/audio/processed/{level}/{category}/*.mp3
 * Target: Supabase Storage bucket "audio" → {level}/{category}/{filename}.mp3
 *
 * Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env vars.
 * Run with: npx tsx scripts/upload-audio-to-supabase.ts
 */

import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

const AUDIO_DIR =
  "/home/duymd/src/dailydictation/tdd-src/src-v1/data-simulator/audio/processed";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables"
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function uploadFile(localPath: string, storagePath: string) {
  const fileBuffer = fs.readFileSync(localPath);
  const { error } = await supabase.storage
    .from("audio")
    .upload(storagePath, fileBuffer, {
      contentType: "audio/mpeg",
      upsert: true,
    });

  if (error) {
    console.error(`  FAIL ${storagePath}: ${error.message}`);
  } else {
    console.log(`  OK ${storagePath}`);
  }
}

async function main() {
  const levels = fs
    .readdirSync(AUDIO_DIR)
    .filter((d) => fs.statSync(path.join(AUDIO_DIR, d)).isDirectory());

  let total = 0;
  let uploaded = 0;

  for (const level of levels) {
    const levelDir = path.join(AUDIO_DIR, level);
    const categories = fs
      .readdirSync(levelDir)
      .filter((d) => fs.statSync(path.join(levelDir, d)).isDirectory());

    for (const category of categories) {
      const catDir = path.join(levelDir, category);
      const files = fs
        .readdirSync(catDir)
        .filter((f) => f.endsWith(".mp3"));

      console.log(`\n[${level}/${category}] ${files.length} files`);

      for (const file of files) {
        total++;
        const localPath = path.join(catDir, file);
        const storagePath = `${level}/${category}/${file}`;
        await uploadFile(localPath, storagePath);
        uploaded++;
      }
    }
  }

  console.log(`\nDone! ${uploaded}/${total} files uploaded.`);
}

main().catch(console.error);
