import React from "react";
import styled from "styled-components";
import { fullSpin } from "./keyframes";
import { variant } from './variants'

const getMeasure = (measure, [sm, md, lg, xl]) => {
  switch (measure) {
    case "sm":
      return sm;
    case "md":
      return md;
    case "lg":
      return lg;
    case "xl":
      return xl;
    default:
      return sm;
  }
};

const Svg = styled.svg`
  transition-property: transform;
  animation-name: ${fullSpin};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  ${variant}
`;

export default function Spinner({ size, variant }) {
  const calcSize = `${
    typeof size === "number" ? size : getMeasure(size, [1.5, 2, 3, 4])
    }rem`;
  return (
    <Svg
      variant={variant}
      height={calcSize}
      width={calcSize}
      style={{ animationDuration: "500ms" }}
      role="img"
      viewBox="0 0 32 32"
    >
      <circle
        role="presentation"
        cx={16}
        cy={16}
        r={12}
        fill="none"
        strokeWidth={4}
        strokeDasharray={Math.PI * 8}
        strokeLinecap="round"
      />
    </Svg>
  );
}

Spinner.defaultProps = {
  size: "md",
  variant: "primary"
};
