import { Wrapper } from "../styles/Output.styled";

const Whoami: React.FC = () => {
  return (
    <Wrapper data-testid="whoami">
      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.2rem', fontWeight: 'bold' }}>
        cd whoami
      </div>

      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        System information and user context for the current terminal session.
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0', paddingTop: '30px' }}></div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        User Information
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        <strong>Username:</strong> deepak<br/>
        <strong>Full Name:</strong> Deepak Singh<br/>
        <strong>Role:</strong> Cyber Security Enthusiast & Ethical Hacker<br/>
        <strong>Location:</strong> India<br/>
        <strong>Timezone:</strong> IST (UTC+5:30)
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        System Context
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        <strong>Current Directory:</strong> /home/deepaksingh/portfolio<br/>
        <strong>Shell:</strong> CyberSec Terminal v2.0<br/>
        <strong>Environment:</strong> Kali Linux Inspired Portfolio<br/>
        <strong>Permissions:</strong> User (ethical hacking mode)
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Professional Profile
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        <strong>Current Status:</strong> MCA Student (Cyber Security & Digital Forensics)<br/>
        <strong>Specialization:</strong> Web Application Security, Penetration Testing<br/>
        <strong>Experience Level:</strong> Intermediate (Building expertise)<br/>
        <strong>Focus Areas:</strong> Bug Bounty, Ethical Hacking, Digital Forensics<br/>
        <strong>Platforms:</strong> TryHackMe, HackTheBox, CTF Challenges
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Skills Overview
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        <strong>Technical Skills:</strong> Python, JavaScript, Linux, Networking<br/>
        <strong>Security Tools:</strong> Burp Suite, Nmap, Metasploit, Wireshark<br/>
        <strong>Web Security:</strong> OWASP Top 10, XSS, SQL Injection, CSRF<br/>
        <strong>Certifications:</strong> Pursuing CEH, CompTIA Security+<br/>
        <strong>Achievements:</strong> Top 7% on TryHackMe, Active Bug Hunter
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0', paddingTop: '30px' }}></div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Terminal Session Info
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        <strong>Session Type:</strong> Interactive Portfolio Terminal<br/>
        <strong>Interface:</strong> Web-based Command Line<br/>
        <strong>Theme:</strong> Cyberpunk/Hacker Style<br/>
        <strong>Commands Available:</strong> 12 (use 'help' for full list)<br/>
        <strong>Portfolio Sections:</strong> About, Education, Projects, Socials, Resume
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Quick Actions
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        • Type `<span style={{ color: '#7FDBFF' }}>about</span>` to learn more about me<br/>
        • Type `<span style={{ color: '#7FDBFF' }}>projects</span>` to see my work<br/>
        • Type `<span style={{ color: '#7FDBFF' }}>socials</span>` to connect with me<br/>
        • Type `<span style={{ color: '#7FDBFF' }}>help</span>` for all available commands
      </div>
    </Wrapper>
  );
};

export default Whoami;