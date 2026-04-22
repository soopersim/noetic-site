import { createClient } from "@supabase/supabase-js";

function getEnv(name: "NEXT_PUBLIC_SUPABASE_URL" | "NEXT_PUBLIC_SUPABASE_ANON_KEY" | "SUPABASE_SERVICE_ROLE_KEY") {
  return process.env[name];
}

export function isSupabaseConfigured() {
  return Boolean(
    getEnv("NEXT_PUBLIC_SUPABASE_URL") &&
      getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY") &&
      getEnv("SUPABASE_SERVICE_ROLE_KEY"),
  );
}

export function getSupabaseBrowser() {
  const url = getEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anonKey = getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  if (!url || !anonKey) {
    throw new Error("Supabase browser credentials are missing.");
  }

  return createClient(url, anonKey);
}

export function getSupabaseServer() {
  const url = getEnv("NEXT_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = getEnv("SUPABASE_SERVICE_ROLE_KEY");

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase server credentials are missing.");
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
