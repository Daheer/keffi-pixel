import React from "react";

export const CheckIcon = ({
  fill = "#084894",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  const circleSize = size || width || height || 24;
  const checkSize = circleSize * 0.6; // 60% of the circle size

  return (
    <svg
      data-name="Iconly/Curved/Check"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${circleSize} ${circleSize}`}
      width={circleSize}
      height={circleSize}
      {...props}
    >
      <circle
        cx={circleSize / 2}
        cy={circleSize / 2}
        r={circleSize / 2}
        fill={fill}
      />
      <g
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={circleSize / 10}
      >
        <path
          data-name="Stroke 1"
          d={`M${circleSize * 0.25} ${circleSize * 0.5} L${circleSize * 0.45} ${circleSize * 0.7} L${circleSize * 0.75} ${circleSize * 0.3}`}
        />
      </g>
    </svg>
  );
};