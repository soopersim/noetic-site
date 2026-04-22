import { NextResponse } from "next/server";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase";
import { reviewSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ reviews: [] });
  }

  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from("reviews")
    .select("id, name, role, rating, review, language, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(12);

  if (error) {
    return NextResponse.json({ error: "REVIEWS_LOAD_FAILED" }, { status: 500 });
  }

  return NextResponse.json({ reviews: data });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = reviewSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "INVALID_REVIEW_DATA" }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!isSupabaseConfigured()) {
      return NextResponse.json({ error: "SUPABASE_NOT_CONFIGURED" }, { status: 500 });
    }

    const supabase = getSupabaseServer();
    const { error } = await supabase.from("reviews").insert({
      name: parsed.data.name,
      role: parsed.data.role || null,
      rating: parsed.data.rating,
      review: parsed.data.review,
      language: parsed.data.language || "en",
      approved: false,
    });

    if (error) {
      return NextResponse.json({ error: "REVIEW_SAVE_FAILED" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "INTERNAL_ERROR" }, { status: 500 });
  }
}
