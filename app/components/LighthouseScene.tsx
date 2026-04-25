export default function LighthouseScene() {
  return (
    <div className="scene-shell">
      <div className="scene-sun-glow" aria-hidden="true" />
      <div className="lighthouse-beam" aria-hidden="true" />
      <div className="lighthouse-glow" aria-hidden="true" />

      <div className="absolute inset-x-0 bottom-28 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.55))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,var(--color-water-2),var(--color-water-4))]" />
      <div className="scene-wave scene-wave-one" aria-hidden="true" />
      <div className="scene-wave scene-wave-two" aria-hidden="true" />
      <div className="scene-wave scene-wave-three" aria-hidden="true" />

      <svg
        viewBox="0 0 420 620"
        className="absolute bottom-0 right-0 h-full w-full"
        role="img"
        aria-label="Stylized lighthouse by the water"
      >
        <g transform="translate(118 48)">
          <ellipse cx="136" cy="38" rx="14" ry="14" fill="rgba(255,255,255,0.92)" />
          <path
            d="M138 25 L121 45 L155 45 Z"
            fill="#f2f8ff"
            opacity="0.8"
          />
          <polygon points="106,56 168,56 145,34 129,34" fill="#dc5537" />
          <rect x="114" y="56" width="46" height="22" rx="4" fill="#ffffff" />
          <rect x="114" y="76" width="46" height="5" fill="#dc5537" />
          <rect x="108" y="80" width="58" height="6" rx="3" fill="#b63d24" />
          <polygon points="118,86 156,86 172,520 102,520" fill="#f7f2ea" />
          <polygon points="126,158 150,158 160,260 120,260" fill="#dc5537" />
          <polygon points="120,300 154,300 163,374 112,374" fill="#dc5537" opacity="0.92" />
          <polygon points="116,446 158,446 166,520 108,520" fill="#b92f16" />
          <polygon points="150,86 156,86 172,520 164,520" fill="rgba(17,35,69,0.08)" />
          <polygon points="118,86 129,86 108,520 102,520" fill="rgba(17,35,69,0.12)" />
          <rect x="131" y="232" width="11" height="28" rx="5.5" fill="#f7f2ea" />
          <rect x="126" y="518" width="22" height="2" fill="#2f4e65" />

          <polygon points="88,505 188,505 178,532 98,532" fill="#294a62" />
          <rect x="88" y="532" width="100" height="22" fill="#f7f2ea" />

          <polygon points="168,448 238,448 286,505 188,505" fill="#dc5537" />
          <rect x="180" y="505" width="82" height="58" fill="#ffffff" />
          <rect x="195" y="525" width="18" height="38" fill="#eff6ff" />
          <polygon points="238,448 286,505 262,505 214,448" fill="rgba(17,35,69,0.16)" />

          <ellipse cx="267" cy="513" rx="18" ry="10" fill="#6b5749" />
          <ellipse cx="291" cy="523" rx="10" ry="7" fill="#5d6871" />
          <ellipse cx="72" cy="517" rx="11" ry="7" fill="#8c6b59" />
          <ellipse cx="56" cy="523" rx="6" ry="4" fill="#e7ded2" />
        </g>
      </svg>

      {[
        { left: "13%", bottom: "18%", size: "0.75rem", delay: "0s" },
        { left: "22%", bottom: "10%", size: "1rem", delay: "-1.4s" },
        { left: "36%", bottom: "16%", size: "0.6rem", delay: "-2.1s" },
        { left: "58%", bottom: "11%", size: "0.85rem", delay: "-0.8s" },
        { left: "76%", bottom: "17%", size: "0.7rem", delay: "-2.8s" },
      ].map((bubble, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="bubble"
          style={{
            left: bubble.left,
            bottom: bubble.bottom,
            width: bubble.size,
            height: bubble.size,
            animationDelay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
}
