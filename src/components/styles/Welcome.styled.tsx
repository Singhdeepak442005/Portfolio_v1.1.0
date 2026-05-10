import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding: 2rem 1rem;

  @media (max-width: 932px) {
    padding: 1rem 0.5rem;
  }

  .info-section {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const PreName = styled.pre`
  margin: 1rem 0;
  text-align: center;
  font-family: 'Courier New', monospace;
  white-space: pre;
  display: block;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const PreWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

export const PreNameMobile = styled.pre`
  margin: 1rem 0;
  text-align: center;
  font-family: 'Courier New', monospace;
  white-space: pre;
  display: block;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const PreImg = styled.pre`
  @media (max-width: 550px) {
    display: none;
  }
`;

export const Seperator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.primary};

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;
