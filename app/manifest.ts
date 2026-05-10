import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Noetic",
    short_name: "Noetic",
    description:
      "An AI-moderated space where young thinkers sharpen how they reason, articulate ideas, and engage in respectful debate.",
    start_url: "/en",
    display: "standalone",
    background_color: "#F5F1EA",
    theme_color: "#7A1F1F",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
