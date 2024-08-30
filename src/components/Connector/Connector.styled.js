import styled from "styled-components";

const Line = styled("div")`
  --height: 50px;
  --thickness: 3px;

  position: absolute;

  background-color: var(--theme-color-text--70);
  pointer-events: none;
`;

const VerticalLine = styled(Line)`
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;

  height: var(--height);
  width: var(--thickness);
`;

export const EndLine = styled(VerticalLine)`
  top: ${({ $y }) => $y}px;
  transform: translateY(-100%);
`;
export const Midline = styled(Line)`
  left: ${({ $startX }) => $startX}px;
  right: ${({ $endX }) => $endX}px;
  top: calc(${({ $y }) => $y}px + var(--height));

  width: ${({ $endX, $startX }) => $endX - $startX}px;

  height: var(--thickness);
`;
export const StartLine = styled(VerticalLine)`
  top: ${({ $y }) => $y}px;
`;
