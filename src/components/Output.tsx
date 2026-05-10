import About from "./commands/About";
import Certificates from "./commands/Certificates";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Help from "./commands/Help";
import History from "./commands/History";
import Open from "./commands/Open";
import Projects from "./commands/Projects";
import Resume from "./commands/Resume";
import Socials from "./commands/Socials";
import Welcome from "./commands/Welcome";
import Whoami from "./commands/Whoami";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg, currentDir, cdError } = useContext(termContext);

  const specialCmds = ["projects", "socials", "echo", "cd"];

  // Component mapping for commands
  const componentMap: { [key: string]: React.ComponentType<any> } = {
    about: About,
    certificates: Certificates,
    clear: Clear,
    echo: Echo,
    education: Education,
    email: Email,
    help: Help,
    history: History,
    open: Open,
    projects: Projects,
    resume: Resume,
    socials: Socials,
    welcome: Welcome,
    whoami: Whoami,
  };

  if (cmd === 'cd') {
    return cdError ? <GeneralOutput>{cdError}</GeneralOutput> : null;
  }

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  // hidden easter eggs
  if (cmd === 'sudo') {
    const full = ['sudo', ...arg].join(' ');
    return (
      <OutputContainer>
        <GeneralOutput>{full}: command not found</GeneralOutput>
        <GeneralOutput>Hint: sudo: unable to resolve host kali: Name or service not known</GeneralOutput>
        <GeneralOutput>Hint: you are already root</GeneralOutput>
      </OutputContainer>
    );
  }
  if (cmd === 'neofetch') {
    return (
      <OutputContainer>
        <GeneralOutput>{`kali 2024.2 \n Kernel: 6.5.0-kali1-amd64 \n Shell: bash 5.2.15 \n Resolution: 1920x1080 \n DE: XFCE \n WM: Xfwm4 \n CPU: Intel i7-9750H (12) @ 4.5GHz \n Memory: 2.1GiB / 16GiB`}</GeneralOutput>
      </OutputContainer>
    );
  }
  if (cmd === 'uname') {
    return (
      <OutputContainer>
        <GeneralOutput>Linux</GeneralOutput>
      </OutputContainer>
    );
  }
  if (cmd === 'ls') {
    let lsOutput = "";
    if (!currentDir) {
      // Root directory - show available sections as directories
      lsOutput = "about  certificates  education  email  projects  resume  socials  welcome";
    } else {
      // In a section - show content based on the section
      switch (currentDir) {
        case 'about':
          lsOutput = "about.txt  bio.md  skills.txt";
          break;
        case 'education':
          lsOutput = "degrees.txt  certifications.txt  courses.txt";
          break;
        case 'projects':
          lsOutput = "portfolio.txt  github.txt  demos.txt";
          break;
        case 'certificates':
          lsOutput = "1Cybersecurity Career Starter Certification (CCSC)\n2Endpoint_Security\n3Hackathon\n4TryHackMe\n5Ethical_Hacking\n6NMAP Mastery\n7Web_Hacking_for_Beginners\n8Web_Pentesting\n\nMore certificates available on LinkedIn:\nhttps://linkedin.com/in/ddeepak-singh";
          break;
        case 'resume':
          lsOutput = "resume.pdf  experience.txt  skills.txt";
          break;
        case 'email':
          lsOutput = "contact.txt  linkedin.txt";
          break;
        case 'socials':
          lsOutput = "github.txt  linkedin.txt  twitter.txt";
          break;
        case 'welcome':
          lsOutput = "welcome.txt  intro.md";
          break;
        default:
          lsOutput = "";
      }
    }
    return <GeneralOutput>{lsOutput}</GeneralOutput>;
  }

  // Get the component for the command
  const Component = componentMap[cmd];
  if (Component) {
    return <Component />;
  }

  // Default case - command not found
  return <GeneralOutput>{cmd}: command not found</GeneralOutput>;
};

export default Output;
