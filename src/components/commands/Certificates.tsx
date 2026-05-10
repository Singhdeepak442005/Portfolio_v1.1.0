import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Certificates: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  return (
    <Wrapper data-testid="certificates">
      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.2rem', fontWeight: 'bold' }}>
        cd certificates
      </div>

      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Browse and view my cybersecurity certificates and achievements.
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0', paddingTop: '30px' }}></div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Available Certificates:
      </div>

      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        <div style={{ marginBottom: '10px' }}>1. CCSC Certificate</div>
        <div style={{ marginBottom: '10px' }}>2. Endpoint Security</div>
        <div style={{ marginBottom: '10px' }}>3. Parul Hackathon</div>
        <div style={{ marginBottom: '10px' }}>4. TryHackMe</div>
        <div style={{ marginBottom: '10px' }}>5. Ethical Hacking</div>
        <div style={{ marginBottom: '10px' }}>6. NMAP Mastery</div>
        <div style={{ marginBottom: '10px' }}>7. Web Security</div>
        <div style={{ marginBottom: '10px' }}>8. Web Pentesting</div>
      </div>

      <div style={{ marginBottom: '20px', color: '#7FDBFF', fontSize: '1rem', fontWeight: 'bold' }}>
        Usage:
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ color: '#00FF88' }}>cd &lt;certificate-name&gt;</span>
        </div>
        <div style={{ marginBottom: '10px', fontStyle: 'italic', color: '#ADB5BD' }}>
          Example: cd tryhackme or cd "Cybersecurity Career Starter Certification (CCSC)"
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0', paddingTop: '30px' }}></div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Supported Commands:
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        • <span style={{ color: '#7FDBFF' }}>cd tryhackme</span> - View TryHackMe Certificate<br/>
        • <span style={{ color: '#7FDBFF' }}>cd ccsc certificate</span> - View CCSC Certificate<br/>
        • <span style={{ color: '#7FDBFF' }}>cd endpoint security</span> - View Endpoint Security Certificate<br/>
        • <span style={{ color: '#7FDBFF' }}>cd ethical hacking</span> - View Ethical Hacking Certificate<br/>
        • <span style={{ color: '#7FDBFF' }}>cd nmap</span> - View NMAP Mastery Certificate<br/>
        • <span style={{ color: '#7FDBFF' }}>cd web hacking for beginners</span> - View Web Hacking for Beginners Certificate<br/>
        • <span style={{ color: '#7FDBFF' }}>cd web pentesting</span> - View Web Pentesting Certificate
      </div>
    </Wrapper>
  );
};

export default Certificates;