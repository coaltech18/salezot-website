export function Spiral({ size = 80, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <path
        d="M40 40 m-4 0 a4 4 0 1 1 8 0 a8 8 0 1 1 -16 0 a12 12 0 1 1 24 0 a16 16 0 1 1 -32 0 a20 20 0 1 1 40 0 a24 24 0 1 1 -48 0"
        stroke={color || "var(--ink)"}
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}
export function Bolt({ size = 70 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 80" fill="none">
      <path
        d="M30 2 L8 44 H24 L18 78 L54 30 H38 L46 2 Z"
        fill="var(--pink)"
        stroke="var(--ink)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function Star({ size = 70, color = "var(--blue)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <path
        d="M40 4 L48 32 L76 32 L54 48 L62 76 L40 60 L18 76 L26 48 L4 32 L32 32 Z"
        fill={color}
        stroke="var(--ink)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function Squiggle({ w = 100, color = "var(--ink)" }) {
  return (
    <svg width={w} height="20" viewBox="0 0 100 20" fill="none">
      <path
        d="M2 10 Q 14 -4, 26 10 T 50 10 T 74 10 T 98 10"
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
