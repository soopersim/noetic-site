import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase";

export const revalidate = 3600;

type Review = {
  id: string;
  name: string;
  role: string | null;
  review: string;
};

async function getFeaturedReviews(): Promise<Review[]> {
  if (!isSupabaseConfigured()) return [];

  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from("reviews")
    .select("id, name, role, review")
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(9);

  if (error) return [];
  return data ?? [];
}

export default async function ReviewsSection() {
  const reviews = await getFeaturedReviews();

  if (reviews.length < 3) return null;

  return (
    <section
      id="testimonials"
      className="border-t border-[var(--line)] px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            What people are saying
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl">
            In their words.
          </h2>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.id} className="flex flex-col">
              {/* Oversized quotation mark */}
              <div
                className="mb-4 font-serif text-[5rem] leading-none text-muted opacity-20 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <blockquote className="font-serif text-xl italic leading-relaxed text-foreground">
                {review.review}
              </blockquote>

              <figcaption className="mt-6 flex flex-col gap-0.5 border-t border-[var(--line)] pt-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground">
                  {review.name}
                </span>
                {review.role && (
                  <span className="text-xs text-muted">{review.role}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
