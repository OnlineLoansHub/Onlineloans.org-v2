export function ExploreIllustration() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Document */}
      <rect
        x="25"
        y="30"
        width="50"
        height="60"
        rx="3"
        stroke="#235675"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="25"
        y="30"
        width="50"
        height="12"
        rx="3"
        fill="#235675"
        fillOpacity="0.1"
      />

      {/* Document lines */}
      <line
        x1="32"
        y1="48"
        x2="68"
        y2="48"
        stroke="#235675"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
      <line
        x1="32"
        y1="56"
        x2="65"
        y2="56"
        stroke="#235675"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
      <line
        x1="32"
        y1="64"
        x2="62"
        y2="64"
        stroke="#235675"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />

      {/* Magnifying glass */}
      <circle cx="75" cy="35" r="14" stroke="#235675" strokeWidth="2" fill="none" />
      <line
        x1="85"
        y1="45"
        x2="95"
        y2="55"
        stroke="#235675"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Chart bars inside document */}
      <rect x="35" y="72" width="4" height="12" fill="#235675" fillOpacity="0.4" />
      <rect x="42" y="68" width="4" height="16" fill="#235675" fillOpacity="0.4" />
      <rect x="49" y="74" width="4" height="10" fill="#235675" fillOpacity="0.4" />
      <rect x="56" y="70" width="4" height="14" fill="#235675" fillOpacity="0.4" />
    </svg>
  );
}

