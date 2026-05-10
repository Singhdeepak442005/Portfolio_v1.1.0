import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const History: React.FC = () => {
  const { history, index, executeCommand } = useContext(termContext);

  // Get all commands executed so far, excluding the current "history" command
  const commandHistory = history.slice(0, index);

  const handleHistoryClick = (cmd: string) => {
    if (executeCommand) {
      executeCommand(cmd);
    }
  };

  return (
    <Wrapper data-testid="history">
      {commandHistory.length === 0 ? (
        <div style={{ color: '#7FDBFF', fontStyle: 'italic' }}>
          No commands in history yet.
        </div>
      ) : (
        commandHistory.map((cmd, idx) => (
          <div
            key={`history-${idx}-${cmd}`}
            style={{
              marginBottom: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'monospace'
            }}
          >
            <span style={{ color: '#7FDBFF', minWidth: '30px' }}>
              {idx + 1}
            </span>
            <span
              onClick={() => handleHistoryClick(cmd)}
              style={{
                cursor: 'pointer',
                color: '#00FF88',
                textDecoration: 'underline',
                flex: 1
              }}
            >
              {cmd}
            </span>
          </div>
        ))
      )}
    </Wrapper>
  );
};

export default History;
