import { NextResponse } from "next/server";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase";
import { waitlistSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "INVALID_FORM_DATA" }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ error: "SUPABASE_NOT_CONFIGURED" }, { status: 500 });
    }

    const supabase = getSupabaseServer();
    const { error } = await supabase.from("waitlist").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      role: parsed.data.role || null,
      interest: parsed.data.interest || null,
      language: parsed.data.language || "en",
      source: parsed.data.source || "landing-page",
      consent: parsed.data.consent,
    });

    if (error) {
      if (error.code === "23505" || error.message.toLowerCase().includes("duplicate")) {
        return NextResponse.json({ error: "DUPLICATE_EMAIL" }, { status: 409 });
      }

      return NextResponse.json({ error: "WAITLIST_SAVE_FAILED" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "INTERNAL_ERROR" }, { status: 500 });
  }
}
