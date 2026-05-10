import { useContext } from "react";
import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";
import { termContext } from "../Terminal";

const Welcome: React.FC = () => {
  const { executeCommand } = useContext(termContext);

  const handleHelpClick = () => {
    if (executeCommand) {
      executeCommand('help');
    }
  };

  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
╔════════════════════════════════════════╗
║                                        ║
║          >> DEEPAK SINGH <<            ║
║                                        ║
║      CYBERSECURITY HACKER TERMINAL     ║
║                                        ║
╚════════════════════════════════════════╝
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
╔════════════════════════════════════════╗
║                                        ║
║          >> DEEPAK SINGH <<            ║
║                                        ║
║      CYBERSECURITY HACKER TERMINAL     ║
║                                        ║
╚════════════════════════════════════════╝
            `}
          </PreNameMobile>
        </PreWrapper>
        <div style={{ marginTop: '1rem', marginBottom: '1rem', color: '#E9ECEF', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Welcome to Deepak Singh's cybersecurity terminal portfolio.
          <br />
          Explore my work with `<Cmd
            onClick={handleHelpClick}
            style={{ cursor: 'pointer' }}
          >
            help
          </Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
