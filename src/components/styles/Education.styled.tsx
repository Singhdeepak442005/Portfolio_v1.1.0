import styled from "styled-components";

export const EduIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const EduList = styled.div`
  margin-bottom: 1rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.275rem;
    color: ${({ theme }) => theme.colors?.neon?.yellow};
    text-shadow: 0 0 8px rgba(250, 204, 21, 0.4);
  }

  .desc {
    color: ${({ theme }) => theme.colors?.text[200]};
  }
`;
