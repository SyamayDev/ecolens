import { useEffect, useState } from "react";

function EcoScore({ score, size = 128 }) {
  const [animatedScore, setAnimatedScore] = useState(0);

  const color = score > 70 ? "#4ade80" : score > 40 ? "#facc15" : "#f87171";

  useEffect(() => {
    if (score === 0) return;
    const interval = setInterval(() => {
      setAnimatedScore((prev) => {
        if (prev < score) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [score]);

  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animatedScore / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
          filter="drop-shadow(0 0 8px rgba(76, 175, 80, 0.5))"
        />
      </svg>
      <span
        className="absolute font-bold"
        style={{
          fontSize: size * 0.35,
          color: color,
          textShadow: `0 0 10px ${color}40`,
        }}
      >
        {animatedScore}
      </span>
    </div>
  );
}

export default EcoScore;
