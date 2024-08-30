import styled from "styled-components";

export const Row = styled("div")`
  display: flex;
  gap: 0.75rem;
  justify-content: ${({ $orientation }) =>
    $orientation === "left" ? "flex-start" : "flex-end"};
`;
