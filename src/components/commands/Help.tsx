import {
  Cmd,
  HelpWrapper,
} from "../styles/Help.styled";
import { termContext } from "../Terminal";
import { useContext } from "react";

const Help: React.FC = () => {
  const { executeCommand } = useContext(termContext);

  const handleCommandClick = (cmd: string) => {
    if (executeCommand) {
      executeCommand(cmd);
    }
  };

  return (
    <HelpWrapper data-testid="help">
      <div style={{ marginBottom: '15px', color: '#7FDBFF', fontSize: '1rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
        Available Commands
      </div>

      <div style={{ marginBottom: '15px', fontFamily: 'monospace' }}>
        <div style={{ marginBottom: '6px' }}>
          <Cmd onClick={() => handleCommandClick('cd welcome')} style={{ cursor: 'pointer' }}>
            welcome
          </Cmd>
        </div>
        <div style={{ marginBottom: '6px' }}>
          <Cmd onClick={() => handleCommandClick('cd about')} style={{ cursor: 'pointer' }}>
            about
          </Cmd>
        </div>
        <div style={{ marginBottom: '6px' }}>
          <Cmd onClick={() => handleCommandClick('cd education')} style={{ cursor: 'pointer' }}>
            education
          </Cmd>
        </div>
        <div style={{ marginBottom: '6px' }}>
          <Cmd onClick={() => handleCommandClick('cd projects')} style={{ cursor: 'pointer' }}>
            projects
          </Cmd>
        </div>
        <div style={{ marginBottom: '6px' }}>
          <Cmd onClick={() => handleCommandClick('cd certificates')} style={{ cursor: 'pointer' }}>
            certificates
          </Cmd>
        </div>
        <div style={{ marginBottom: '6px' }}>
          <Cmd onClick={() => handleCommandClick('cd resume')} style={{ cursor: 'pointer' }}>
            resume
          </Cmd>
        </div>
        <div style={{ marginBottom: '6px' }}>
          <Cmd onClick={() => handleCommandClick('cd email')} style={{ cursor: 'pointer' }}>
            email
          </Cmd>
        </div>
        <div style={{ marginBottom: '6px' }}>
          <Cmd onClick={() => handleCommandClick('cd socials')} style={{ cursor: 'pointer' }}>
            socials
          </Cmd>
        </div>
      </div>

      <div style={{ marginBottom: '15px', fontFamily: 'monospace', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Cmd onClick={() => handleCommandClick('help')} style={{ cursor: 'pointer' }}>
          help
        </Cmd>
        <Cmd onClick={() => handleCommandClick('history')} style={{ cursor: 'pointer' }}>
          history
        </Cmd>
        <Cmd onClick={() => handleCommandClick('ls')} style={{ cursor: 'pointer' }}>
          ls
        </Cmd>
        <Cmd onClick={() => handleCommandClick('whoami')} style={{ cursor: 'pointer' }}>
          whoami
        </Cmd>
        <Cmd onClick={() => handleCommandClick('pwd')} style={{ cursor: 'pointer' }}>
          pwd
        </Cmd>
      </div>
    </HelpWrapper>
  );
};

export default Help;
