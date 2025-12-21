export function CompareIllustration() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left card */}
      <rect
        x="10"
        y="35"
        width="40"
        height="50"
        rx="3"
        stroke="#235675"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="10"
        y="35"
        width="40"
        height="10"
        rx="3"
        fill="#235675"
        fillOpacity="0.1"
      />

      {/* Right card */}
      <rect
        x="70"
        y="30"
        width="40"
        height="55"
        rx="3"
        stroke="#235675"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="70"
        y="30"
        width="40"
        height="10"
        rx="3"
        fill="#235675"
        fillOpacity="0.15"
      />

      {/* Comparison arrows - bidirectional */}
      <path d="M55 55 L65 55" stroke="#235675" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M60 50 L65 55 L60 60"
        stroke="#235675"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Balance scale indicator */}
      <line
        x1="30"
        y1="60"
        x2="90"
        y2="60"
        stroke="#235675"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        strokeOpacity="0.4"
      />

      {/* Left card content */}
      <line
        x1="18"
        y1="52"
        x2="42"
        y2="52"
        stroke="#235675"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
      <line
        x1="18"
        y1="60"
        x2="38"
        y2="60"
        stroke="#235675"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />

      {/* Right card content */}
      <line
        x1="78"
        y1="47"
        x2="102"
        y2="47"
        stroke="#235675"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
      <line
        x1="78"
        y1="55"
        x2="100"
        y2="55"
        stroke="#235675"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
      <line
        x1="78"
        y1="63"
        x2="98"
        y2="63"
        stroke="#235675"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
    </svg>
  );
}

