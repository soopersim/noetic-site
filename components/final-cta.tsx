"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";

const emailSchema = z.string().email();

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return;

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: email.split("@")[0],
          email,
          consent: true,
          source: "final-cta",
          website: honeypot,
        }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        if (data.error === "DUPLICATE_EMAIL") {
          setStatus("success");
          return;
        }
        setErrorMsg("Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      className="border-t border-[var(--line)] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Think clearly.
            <br />
            Argue better.
            <br />
            Join Noetic.
          </h2>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10"
            >
              <p className="text-base font-semibold text-foreground">
                You&apos;re on the list.
              </p>
              <p className="mt-1 text-sm text-muted">
                We&apos;ll be in touch when Noetic is ready for you.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="mt-10" noValidate>
              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <label htmlFor="cta-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="cta-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-full border border-[var(--line-strong)] bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-foreground sm:w-72"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white hover:bg-accent-hover disabled:opacity-60 transition sm:w-auto"
                >
                  {status === "submitting" ? "Joining…" : "Join Waitlist"}
                </button>
              </div>

              {status === "error" && (
                <p className="mt-3 text-sm text-accent">{errorMsg}</p>
              )}
            </form>
          )}

          <p className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-muted opacity-60">
            No spam. Just early access and updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
