import styled from "styled-components";

export const Bubble = styled("a")`
  --size: 4rem;

  align-items: center;
  display: flex;
  height: var(--size);
  justify-content: center;
  order: ${({ $order }) => $order};
  width: var(--size);

  text-decoration: none;

  background: var(--color-primary);
  border: 0.375rem solid var(--color-primary--light);
  border-radius: 50%;
`;
