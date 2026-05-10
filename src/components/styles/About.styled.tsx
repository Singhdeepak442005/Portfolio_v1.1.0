import styled from "styled-components";

export const AboutWrapper = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  p {
    margin-top: 0.5rem;
    line-height: 1.5rem;
  }
`;

export const HighlightSpan = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.neon?.green};
  text-shadow: 0 0 8px rgba(0, 255, 136, 0.4);
`;

export const HighlightAlt = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.neon?.electricBlue};
  text-shadow: 0 0 8px rgba(0, 212, 255, 0.4);
`;
