import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.2rem', fontWeight: 'bold' }}>
        cd about
      </div>

      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Hi, my name is <HighlightSpan>Deepak Singh</HighlightSpan>.
      </div>

      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Cyber Security Enthusiast focused on web security and ethical hacking.
      </div>

      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        MCA at Parul University focused on cybersecurity and digital forensics.
      </div>

      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Top 7% on TryHackMe 🏆 | Bug Bounty Hunter
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0', paddingTop: '30px' }}></div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Professional Background
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        I'm a passionate cybersecurity professional with expertise in web application security, penetration testing, and digital forensics. My journey began with a strong foundation in computer science and has evolved into specialized knowledge in offensive security techniques and defensive strategies.
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Technical Expertise
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        • Web Security & Penetration Testing (VAPT)<br/>
        • Network Security & Infrastructure<br/>
        • Digital Forensics & Incident Response<br/>
        • Programming: Python, JavaScript, Linux<br/>
        • Tools: Burp Suite, Nmap, Metasploit, Wireshark<br/>
        • Platforms: TryHackMe, HackTheBox, Bug Bounty Programs
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Current Focus
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Currently pursuing my MCA with specialization in Cyber Security and Digital Forensics at Parul University. Actively participating in bug bounty programs, contributing to open-source security projects, and continuously learning through platforms like TryHackMe where I maintain a top 7% ranking.
      </div>
    </AboutWrapper>
  );
};

export default About;
