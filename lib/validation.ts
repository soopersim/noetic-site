import { z } from "zod";

export const waitlistSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  role: z.string().max(100).optional().or(z.literal("")),
  interest: z.string().max(500).optional().or(z.literal("")),
  language: z.string().max(20).optional().or(z.literal("")),
  source: z.string().max(100).optional().or(z.literal("")),
  consent: z.literal(true),
  website: z.string().optional(),
});

export const reviewSchema = z.object({
  name: z.string().min(2).max(100),
  role: z.string().max(100).optional().or(z.literal("")),
  rating: z.coerce.number().min(1).max(5),
  review: z.string().min(10).max(500),
  language: z.string().max(20).optional().or(z.literal("")),
  website: z.string().optional(),
});
