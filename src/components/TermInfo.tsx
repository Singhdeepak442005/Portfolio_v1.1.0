import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";
import { useContext } from "react";
import { termContext } from "./Terminal";

const TermInfo = () => {
  const { currentDir } = useContext(termContext);
  const path = currentDir ? `~/${currentDir}` : "~";

  return (
    <Wrapper>
      <User>root</User>@<WebsiteName>deepak.local</WebsiteName>:{path}$
    </Wrapper>
  );
};

export default TermInfo;
