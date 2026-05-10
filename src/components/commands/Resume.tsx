import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Resume: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "resume") {
    window.open("/Deepak_Resume.pdf", "_blank");
  }

  const handleResumeClick = () => {
    window.open("/Deepak_Resume.pdf", "_blank");
  };

  return (
    <Wrapper data-testid="resume">
      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.2rem', fontWeight: 'bold' }}>
        cd resume
      </div>

      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Download my comprehensive resume to learn more about my professional background, technical skills, and cybersecurity expertise.
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0', paddingTop: '30px' }}></div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Resume Overview
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        My resume provides a detailed overview of my cybersecurity career, including:
        <br/><br/>
        • Professional experience and achievements<br/>
        • Educational background and certifications<br/>
        • Technical skills and competencies<br/>
        • Cybersecurity projects and research<br/>
        • Professional development and training<br/>
        • Contact information and professional profiles
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Key Highlights
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        • <strong>Education:</strong> Currently pursuing MCA in Cyber Security & Digital Forensics<br/>
        • <strong>Experience:</strong> Active in bug bounty programs and ethical hacking<br/>
        • <strong>Skills:</strong> Penetration testing, web security, network security, digital forensics<br/>
        • <strong>Platforms:</strong> TryHackMe (Top 7%), HackTheBox, Bug Bounty programs<br/>
        • <strong>Tools:</strong> Burp Suite, Nmap, Metasploit, Wireshark, and more
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Resume Sections
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        <strong>Professional Summary</strong> - Overview of my cybersecurity expertise and current focus<br/>
        <strong>Technical Skills</strong> - Detailed list of tools, languages, and technologies<br/>
        <strong>Education</strong> - Academic qualifications and ongoing studies<br/>
        <strong>Projects</strong> - Notable cybersecurity projects and implementations<br/>
        <strong>Certifications</strong> - Professional certifications and achievements<br/>
        <strong>Professional Experience</strong> - Work history and accomplishments<br/>
        <strong>Contact Information</strong> - How to reach me for opportunities
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Download Options
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        • <strong>Format:</strong> PDF (optimized for professional viewing)<br/>
        • <strong>Size:</strong> Approximately 2-3 pages<br/>
        • <strong>Language:</strong> English<br/>
        • <strong>Last Updated:</strong> Current as of my latest achievements
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0', paddingTop: '30px' }}></div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Download Resume
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Ready to review my full professional background? Click below to download my resume:
        <br/><br/>
        <span
          onClick={handleResumeClick}
          style={{
            cursor: 'pointer',
            textDecoration: 'underline',
            color: '#00FF88',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          📄 Download Deepak_Resume.pdf
        </span>
        <br/><br/>
        <em>The resume will open in a new tab for your convenience.</em>
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Next Steps
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        After reviewing my resume, feel free to:
        <br/><br/>
        • Reach out via the `<span style={{ color: '#7FDBFF' }}>email</span>` command for opportunities<br/>
        • Connect through my `<span style={{ color: '#7FDBFF' }}>socials</span>` for professional networking<br/>
        • Explore my `<span style={{ color: '#7FDBFF' }}>projects</span>` to see practical implementations<br/>
        • Learn more about my background with the `<span style={{ color: '#7FDBFF' }}>about</span>` command
      </div>
    </Wrapper>
  );
};

export default Resume;
