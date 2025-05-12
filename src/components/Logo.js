import React from "react";

function Logo({ size = 48 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-label="MarkNova Logo"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <rect width="64" height="64" rx="16" fill="url(#bg-gradient)" />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        fontFamily="'Poppins', 'Montserrat', sans-serif"
        fontWeight="bold"
        fontSize="32"
        fill="#fff"
        letterSpacing="2"
        dominantBaseline="middle"
      >
        MN
      </text>
      <defs>
        <linearGradient id="bg-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00fff7" />
          <stop offset="1" stopColor="#7f5cff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo;