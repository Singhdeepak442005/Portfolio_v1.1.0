import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender, executeCommand } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== handle project click ===== */
  const handleProjectClick = (id: number, url: string) => {
    window.open(url, "_blank");
  };

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>cd projects</ProjectsIntro>

      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Welcome to my cybersecurity research and development portfolio. Here you'll find my key projects focused on web security, penetration testing tools, and bug bounty automation.
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0', paddingTop: '30px' }}></div>

      {projects.map(({ id, title, desc, url, detailedDesc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle
            onClick={() => handleProjectClick(id, url)}
            style={{ cursor: 'pointer' }}
          >
            {`${id}. ${title}`}
          </ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
          {detailedDesc && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: 'rgba(0, 255, 136, 0.05)',
              border: '1px solid rgba(0, 255, 136, 0.2)',
              borderRadius: '8px',
              lineHeight: '1.6',
              color: '#E9ECEF'
            }}>
              {detailedDesc}
            </div>
          )}
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "TryHackMe Web Security Notes",
    desc: "A collection of TryHackMe lab writeups, web pentest findings, and vulnerability workflows.",
    url: "https://github.com/Singhdeepak442005/tryhackme-notes",
    detailedDesc: "Comprehensive documentation of my TryHackMe journey including detailed writeups for web security rooms, vulnerability exploitation techniques, and penetration testing methodologies. Features practical examples of SQL injection, XSS, CSRF, and other web vulnerabilities with step-by-step exploitation guides."
  },
  {
    id: 2,
    title: "Bug Bounty Recon Toolkit",
    desc: "Scripts and automation tools for recon, scope validation, and report preparation.",
    url: "https://github.com/Singhdeepak442005/bug-bounty-toolkit",
    detailedDesc: "A comprehensive toolkit for bug bounty hunters featuring automated reconnaissance scripts, scope validation tools, and report generation utilities. Includes subdomain enumeration, technology stack identification, vulnerability scanning automation, and professional report templates for bug bounty submissions."
  },
  {
    id: 3,
    title: "Web Security Research",
    desc: "Security research demos focused on web vulnerabilities, input validation, and auth flows.",
    url: "https://github.com/Singhdeepak442005",
    detailedDesc: "Advanced web security research projects demonstrating complex vulnerabilities including authentication bypass techniques, authorization flaws, business logic vulnerabilities, and advanced injection attacks. Includes proof-of-concept demonstrations and mitigation strategies for real-world web application security issues."
  },
  {
    id: 4,
    title: "Portfolio Terminal UI",
    desc: "An interactive dark terminal portfolio with hacker-inspired glassmorphism styling.",
    url: "https://github.com/Singhdeepak442005",
    detailedDesc: "This very portfolio - a fully interactive terminal interface built with React, TypeScript, and styled-components. Features cyberpunk-inspired design with glassmorphism effects, smooth animations, and a complete command-line interface for navigating my professional portfolio and cybersecurity expertise."
  },
];

export default Projects;
