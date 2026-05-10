import { Wrapper } from "../styles/Output.styled";

const Email: React.FC = () => {

  return (
    <Wrapper data-testid="email">
      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.2rem', fontWeight: 'bold' }}>
        cd email
      </div>

      <div style={{ marginBottom: '20px', color: '#7FDBFF', fontSize: '1rem', fontWeight: 'bold' }}>
        Email Address:
      </div>
      <div style={{ marginBottom: '20px' }}>
        <span
          style={{
            color: '#00FF88',
            fontSize: '1.1rem',
            fontFamily: 'monospace'
          }}
        >
          ddeepakkumar847105@gmail.com
        </span>
      </div>
    </Wrapper>
  );
};

export default Email;
