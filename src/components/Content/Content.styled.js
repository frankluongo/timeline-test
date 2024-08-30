import styled from "styled-components";

export const Content = styled("a")`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  justify-content: center;

  text-align: ${({ $align }) => $align};
  text-decoration: none;
`;

export const Title = styled("h3")`
  color: var(--theme-color-text);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.005em;
  line-height: 24px;
`;

export const Info = styled("div")`
  color: var(--theme-color-text--70);
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.005em;
`;
