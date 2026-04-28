"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Review = {
  id: string;
  name: string;
  role: string | null;
  rating: number;
  review: string;
};

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadReviews() {
      try {
        const response = await fetch("/api/reviews", {
          cache: "no-store",
          signal: controller.signal,
        });
        const data = (await response.json()) as { reviews?: Review[] };
        setReviews(data.reviews ?? []);
      } catch {
        if (!controller.signal.aborted) {
          setReviews([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadReviews();
    return () => controller.abort();
  }, []);

  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C9C2B8]">Testimonials</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-[#F7F4EF]">What people are saying</h2>
        </motion.div>

        {isLoading ? (
          <div className="text-center text-[#C9C2B8]">
            <p>Loading testimonials...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center text-[#C9C2B8]">
            <p>Be the first to share your thoughts about Noetic.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-[rgba(247,244,239,0.12)] bg-[rgba(247,244,239,0.08)] p-6 hover:bg-[rgba(247,244,239,0.12)] transition"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-[#C9B99B]">★</span>
                  ))}
                </div>
                <p className="text-[#F7F4EF] leading-relaxed mb-4">{review.review}</p>
                <div>
                  <p className="text-sm font-semibold text-[#F7F4EF]">{review.name}</p>
                  {review.role && <p className="text-xs text-[#C9C2B8]">{review.role}</p>}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
