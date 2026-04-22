export default function NoeticMark() {
  return (
    <div className="mx-auto max-w-[20rem] rounded-[2rem] bg-[#070707] p-6 shadow-[0_34px_80px_rgba(0,0,0,0.24)] sm:p-8">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-black p-4 sm:p-6">
        <svg
          viewBox="0 0 160 160"
          className="h-auto w-full"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="noetic-mark-glow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="noetic-overlap" cx="50%" cy="50%" r="45%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="80" cy="80" r="62" fill="url(#noetic-mark-glow)" />

          <g className="noetic-mark" transform="translate(0 0)">
            <circle
              className="ring ring-left"
              cx="60"
              cy="80"
              r="34"
            />
            <circle
              className="ring ring-right"
              cx="100"
              cy="80"
              r="34"
            />
            <circle
              className="overlap"
              cx="80"
              cy="80"
              r="24"
              fill="url(#noetic-overlap)"
            />
            <circle
              className="ring-highlight"
              cx="100"
              cy="80"
              r="34"
            />
          </g>
        </svg>
      </div>

      <style jsx>{`
        .noetic-mark {
          transform-origin: 80px 80px;
        }

        .ring {
          fill: none;
          stroke: rgba(255, 255, 255, 0.92);
          stroke-width: 6;
          stroke-linecap: round;
          opacity: 0.88;
        }

        .ring-left,
        .ring-right {
          transform-origin: center;
        }

        .ring-highlight {
          fill: none;
          stroke: rgba(255, 255, 255, 0.62);
          stroke-width: 4;
          stroke-linecap: round;
          stroke-dasharray: 6 214;
          opacity: 0.7;
        }

        .overlap {
          opacity: 0.16;
        }
      `}</style>
    </div>
  );
}
