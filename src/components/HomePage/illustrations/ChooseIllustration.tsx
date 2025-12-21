export function ChooseIllustration() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Shield badge */}
      <path
        d="M60 25 L45 30 L45 50 C45 65 55 75 60 85 C65 75 75 65 75 50 L75 30 Z"
        stroke="#235675"
        strokeWidth="2"
        fill="none"
      />

      {/* Checkmark inside shield */}
      <path
        d="M52 50 L58 56 L68 44"
        stroke="#235675"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Approved document */}
      <rect
        x="30"
        y="70"
        width="60"
        height="40"
        rx="3"
        stroke="#235675"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="30"
        y="70"
        width="60"
        height="12"
        rx="3"
        fill="#235675"
        fillOpacity="0.1"
      />

      {/* Document lines */}
      <line
        x1="38"
        y1="88"
        x2="82"
        y2="88"
        stroke="#235675"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
      <line
        x1="38"
        y1="96"
        x2="75"
        y2="96"
        stroke="#235675"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
      <line
        x1="38"
        y1="104"
        x2="70"
        y2="104"
        stroke="#235675"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
    </svg>
  );
}

