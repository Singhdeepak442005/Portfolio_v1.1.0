import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import _ from "lodash";
import Output from "./Output";
import TermInfo from "./TermInfo";
import Open from "./commands/Open";
import {
  CmdNotFound,
  Empty,
  Form,
  Hints,
  Input,
  MobileBr,
  MobileSpan,
  Wrapper,
} from "./styles/Terminal.styled";
import { argTab } from "../utils/funcs";
import { getCertificateKey } from "../utils/certificateData";

type Command = {
  cmd: string;
  desc: string;
  tab: number;
}[];

export const commands: Command = [
  { cmd: "about", desc: "about Deepak Singh", tab: 8 },
  { cmd: "cd", desc: "change directory", tab: 10 },
  { cmd: "clear", desc: "clear the terminal", tab: 8 },
  { cmd: "echo", desc: "print out anything", tab: 9 },
  { cmd: "education", desc: "my education background", tab: 4 },
  { cmd: "email", desc: "send me an email", tab: 8 },
  { cmd: "exit", desc: "exit current view/modal", tab: 8 },
  { cmd: "resume", desc: "open my resume", tab: 7 },
  { cmd: "help", desc: "check available commands", tab: 9 },
  { cmd: "history", desc: "view command history", tab: 6 },
  { cmd: "projects", desc: "view my security projects", tab: 5 },
  { cmd: "certificates", desc: "view my certificates", tab: 2 },
  { cmd: "pwd", desc: "print current working directory", tab: 10 },
  { cmd: "socials", desc: "view my social and education links", tab: 6 },
  { cmd: "open", desc: "open certificate images", tab: 8 },
  { cmd: "welcome", desc: "display welcome panel", tab: 6 },
  { cmd: "whoami", desc: "about current user", tab: 7 },
];

// Hidden easter-egg commands (not listed in help)
export const hiddenCommands = [
  "sudo",
  "neofetch",
  "uname",
  "ls",
];

type Term = {
  arg: string[];
  history: string[];
  rerender: boolean;
  index: number;
  currentDir: string;
  showModal: boolean;
  selectedCertificate: string | null;
  clearHistory?: () => void;
  executeCommand?: (cmd: string) => void;
  changeDirectory?: (dir: string) => void;
  setShowModal?: (show: boolean) => void;
  setSelectedCertificate?: (cert: string | null) => void;
  cdError: string;
  setCdError?: (error: string) => void;
};

export const termContext = createContext<Term>({
  arg: [],
  history: [],
  rerender: false,
  index: 0,
  currentDir: "",
  showModal: false,
  selectedCertificate: null,
  cdError: "",
});

const Terminal = () => {
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputVal, setInputVal] = useState("");
  // Start with empty terminal - no automatic output
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [rerender, setRerender] = useState(false);
  const [hints, setHints] = useState<string[]>([]);
  const [showInitialHint, setShowInitialHint] = useState(true);
  // Current directory state - empty string means root (~)
  const [currentDir, setCurrentDir] = useState<string>("");
  // Modal state for certificate viewer
  const [showModal, setShowModal] = useState<boolean>(false);
  // Selected certificate for modal
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [cdError, setCdError] = useState<string>("");
  // History navigation index: null means not navigating; otherwise index into cmdHistory (oldest -> newest)
  const [histIndex, setHistIndex] = useState<number | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRerender(false);
      setInputVal(e.target.value);
    },
    [inputVal]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cmd = inputVal.trim();
    const parts = cmd.split(' ');
    const command = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    // Handle cd command specially
    if (command === 'cd') {
      const validSections = ['welcome', 'about', 'education', 'projects', 'certificates', 'resume', 'email', 'socials'];
      const certificateKey = getCertificateKey(arg);
      const normalizedArg = arg.trim();
      setShowInitialHint(false);
      setInputVal("");
      setRerender(true);
      setHints([]);
      setHistIndex(null);

      if (normalizedArg.length === 0) {
        setCurrentDir("");
        setShowModal(false);
        setSelectedCertificate(null);
        setCdError("");
        setCmdHistory([...cmdHistory, cmd]);
        return;
      }

      if (normalizedArg === '..') {
        if (currentDir === 'certificates') {
          setCurrentDir("");
          setShowModal(false);
          setSelectedCertificate(null);
        }
        setCdError("");
        setCmdHistory([...cmdHistory, cmd]);
        return;
      }

      if (validSections.includes(normalizedArg)) {
        setCurrentDir(normalizedArg);
        setShowModal(false);
        setSelectedCertificate(null);
        setCdError("");
        setCmdHistory([...cmdHistory, cmd]);
        return;
      }

      if (currentDir === 'certificates' && certificateKey) {
        setCurrentDir('certificates');
        setSelectedCertificate(certificateKey);
        setShowModal(true);
        setCdError("");
        setCmdHistory([...cmdHistory, cmd]);
        return;
      }

      setCdError(`bash: cd: no such file or directory: ${arg}`);
      setCmdHistory([...cmdHistory, cmd]);
      return;
    }

    // For all other commands, add to history
    setCmdHistory([...cmdHistory, inputVal]);
    setShowInitialHint(false);
    setInputVal("");
    setRerender(true);
    setHints([]);
    setHistIndex(null);
  };

  const clearHistory = () => {
    setCmdHistory([]);
    setHints([]);
    setShowInitialHint(true);
    setCurrentDir(""); // Reset to root directory
  };

  const changeDirectory = (dir: string) => {
    setCurrentDir(dir);
  };

  const executeCommand = (cmd: string) => {
    setCmdHistory([...cmdHistory, cmd]);
    setRerender(true);
    setHints([]);
    setHistIndex(null);
  };

  // focus on input when terminal is clicked
  const handleDivClick = () => {
    inputRef.current && inputRef.current.focus();
  };
  useEffect(() => {
    document.addEventListener("click", handleDivClick);
    return () => {
      document.removeEventListener("click", handleDivClick);
    };
  }, [containerRef]);

  // Keyboard Press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setRerender(false);
    const ctrlI = e.ctrlKey && e.key.toLowerCase() === "i";
    const ctrlL = e.ctrlKey && e.key.toLowerCase() === "l";

    // if Tab or Ctrl + I
    if (e.key === "Tab" || ctrlI) {
      e.preventDefault();
      if (!inputVal) return;

      const cmdMatches = commands
        .map(({ cmd }) => cmd)
        .filter((cmd) => _.startsWith(cmd, inputVal));

      const returnedHints = argTab(inputVal, setInputVal, setHints, cmdMatches, currentDir) || [];

      if (returnedHints.length > 1) {
        setHints(returnedHints);
        return;
      }

      if (returnedHints.length === 1) {
        setHints([]);
        return;
      }

      if (cmdMatches.length === 1) {
        setInputVal(cmdMatches[0]);
        setHints([]);
        return;
      }
    }

    // if Ctrl + L
    if (ctrlL) {
      clearHistory();
    }

    // Go previous cmd
    if (e.key === "ArrowUp") {
      if (cmdHistory.length === 0) return;

      const nextIndex = histIndex === null ? cmdHistory.length - 1 : Math.max(0, histIndex - 1);
      setHistIndex(nextIndex);
      setInputVal(cmdHistory[nextIndex]);
      inputRef?.current?.blur();
    }

    // Go next cmd
    if (e.key === "ArrowDown") {
      if (histIndex === null) return;

      if (histIndex === cmdHistory.length - 1) {
        setInputVal("");
        setHistIndex(null);
        return;
      }

      const nextIndex = Math.min(cmdHistory.length - 1, histIndex + 1);
      setHistIndex(nextIndex);
      setInputVal(cmdHistory[nextIndex]);
      inputRef?.current?.blur();
    }
  };

  // For caret position at the end
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef?.current?.focus();
    }, 1);
    return () => clearTimeout(timer);
  }, [inputRef, inputVal, histIndex]);

  // Auto-scroll to bottom when history updates or new output renders
  useEffect(() => {
    const el = containerRef?.current as unknown as HTMLElement | null;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [cmdHistory, rerender]);

  return (
    <termContext.Provider value={{
      arg: [],
      history: cmdHistory,
      rerender,
      index: -1,
      currentDir,
      showModal,
      selectedCertificate,
      cdError,
      clearHistory,
      executeCommand,
      changeDirectory,
      setShowModal,
      setSelectedCertificate,
      setCdError,
    }}>
      <Wrapper data-testid="terminal-wrapper" ref={containerRef}>
        {cmdHistory.map((cmdH, index) => {
        const commandArray = _.split(_.trim(cmdH), " ");
        const validCommand = _.find(commands, { cmd: commandArray[0] });
        const contextValue = {
          arg: _.drop(commandArray),
          history: cmdHistory,
          rerender,
          index,
          currentDir,
          showModal,
          selectedCertificate,
          cdError,
          clearHistory,
          executeCommand,
          changeDirectory,
          setShowModal,
          setSelectedCertificate,
          setCdError,
        };
        return (
          <div key={_.uniqueId(`${cmdH}_`)}>
            <div>
              <TermInfo />
              <MobileBr />
              <MobileSpan>&#62;</MobileSpan>
              <span data-testid="input-command">{cmdH}</span>
            </div>
            {(validCommand || hiddenCommands.includes(commandArray[0])) ? (
              <termContext.Provider value={contextValue}>
                <Output index={index} cmd={commandArray[0]} />
              </termContext.Provider>
            ) : cmdH === "" ? (
              <Empty />
            ) : (
              <CmdNotFound data-testid={`not-found-${index}`}>
                command not found: {cmdH}
              </CmdNotFound>
            )}
          </div>
        );
      })}

      {hints.length > 1 && (
        <div>
          {hints.map(hCmd => (
            <Hints key={hCmd}>{hCmd}</Hints>
          ))}
        </div>
      )}

      {showInitialHint && cmdHistory.length === 0 && (
        <div style={{ color: '#00FF88', marginBottom: '20px' }}>
          Type `help` to view available commands.
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        <label htmlFor="terminal-input">
          <TermInfo /> <MobileBr />
          <MobileSpan>&#62;</MobileSpan>
        </label>
        <Input
          title="terminal-input"
          type="text"
          id="terminal-input"
          autoComplete="off"
          spellCheck="false"
          autoFocus
          autoCapitalize="off"
          ref={inputRef}
          value={inputVal}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </Form>
      <Open />
    </Wrapper>
    </termContext.Provider>
  );
};

export default Terminal;
