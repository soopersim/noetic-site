import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Noetic — Think clearly. Argue better.";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#F5F1EA",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Outer border */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 32,
            right: 32,
            bottom: 32,
            border: "1px solid rgba(26,23,20,0.14)",
            display: "flex",
          }}
        />

        {/* Pill badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid rgba(26,23,20,0.2)",
            borderRadius: 100,
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 20,
            paddingRight: 20,
            marginBottom: 48,
          }}
        >
          <span
            style={{
              color: "#6B6560",
              fontSize: 15,
              letterSpacing: "0.18em",
              fontWeight: 600,
            }}
          >
            FOR THE NEXT GENERATION OF THINKERS
          </span>
        </div>

        {/* NOETIC wordmark */}
        <div
          style={{
            color: "#1A1714",
            fontSize: 136,
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            display: "flex",
          }}
        >
          NOETIC
        </div>

        {/* Subhead */}
        <div
          style={{
            color: "#6B6560",
            fontSize: 28,
            fontWeight: 400,
            marginTop: 32,
            letterSpacing: "-0.01em",
            display: "flex",
          }}
        >
          Think clearly. Argue better.
        </div>

        {/* Bottom rule + tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            right: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: "100%",
              height: 1,
              background: "rgba(26,23,20,0.1)",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#6B6560",
              fontSize: 14,
              letterSpacing: "0.14em",
              fontWeight: 600,
            }}
          >
            NOETIC.APP
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
