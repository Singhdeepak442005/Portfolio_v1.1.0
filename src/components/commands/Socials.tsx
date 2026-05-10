import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Socials: React.FC = () => {
  const { arg, history, rerender, executeCommand } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== handle social link click ===== */
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="socials" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.2rem', fontWeight: 'bold' }}>
        cd socials
      </div>

      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Connect with me across various platforms. Find my professional profiles, security research, and community contributions.
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0', paddingTop: '30px' }}></div>

      {socials.map(({ id, title, url, tab, description }) => (
        <CmdList key={title}>
          <Cmd
            onClick={() => handleSocialClick(url)}
            style={{ cursor: 'pointer' }}
          >
            {`${id}. ${title}`}
          </Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
          {description && (
            <div style={{
              marginTop: '10px',
              marginLeft: `${tab * 8 + 20}px`,
              padding: '10px',
              background: 'rgba(0, 180, 255, 0.05)',
              border: '1px solid rgba(0, 180, 255, 0.2)',
              borderRadius: '6px',
              lineHeight: '1.5',
              color: '#E9ECEF',
              fontSize: '0.9rem'
            }}>
              {description}
            </div>
          )}
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/Singhdeepak442005",
    tab: 3,
    description: "My primary development platform featuring cybersecurity research, bug bounty tools, and open-source security projects. Check out my TryHackMe writeups, penetration testing scripts, and web security research."
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://linkedin.com/in/ddeepak-singh",
    tab: 1,
    description: "Professional networking profile showcasing my cybersecurity career, education, and industry connections. Connect for collaboration opportunities in security research and penetration testing."
  },
  {
    id: 3,
    title: "TryHackMe",
    url: "https://tryhackme.com/p/kingdomindian67",
    tab: 2,
    description: "My cybersecurity learning platform where I maintain a top 7% ranking. Active in web security, penetration testing, and CTF challenges. Regular contributor to the security community."
  },
  {
    id: 4,
    title: "Parul University",
    url: "https://paruluniversity.ac.in/",
    tab: 1,
    description: "My current academic institution where I'm pursuing MCA with specialization in Cyber Security and Digital Forensics. Focus on advanced security concepts and practical implementation."
  },
];

export default Socials;
