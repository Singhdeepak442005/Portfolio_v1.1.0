export interface CertificateInfo {
  name: string;
  description: string;
  image: string;
  aliases: string[];
}

const normalize = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[\s\-_()]+/g, " ")
    .replace(/[^a-z0-9 ]/g, "")
    .trim();

export const certificateData: Record<string, CertificateInfo> = {
  ccsc: {
    name: "Cybersecurity Career Starter Certification (CCSC)",
    description:
      "Certified Cybersecurity Specialist certification demonstrating expertise in cybersecurity fundamentals and best practices.",
    image: "/certificate/1Cybersecurity Career Starter Certification (CCSC).png",
    aliases: [
      "ccsc",
      "ccsc certificate",
      "cybersecurity career starter certification",
      "cybersecurity career starter certification ccs c",
      "cybersecurity career starter",
    ],
  },
  endpoint_security: {
    name: "Endpoint Security",
    description:
      "Advanced certification in endpoint protection, threat detection, and security monitoring for enterprise environments.",
    image: "/certificate/2Endpoint_Security.png",
    aliases: ["endpoint security", "endpoint_security", "endpoint", "endpoint-security"],
  },
  hackathon: {
    name: "Hackathon",
    description:
      "Participation certificate from cybersecurity hackathon demonstrating practical problem-solving and security skills.",
    image: "/certificate/3Hackathon.png",
    aliases: ["hackathon", "parul hackathon", "parul_hackathon"],
  },
  tryhackme: {
    name: "TryHackMe",
    description:
      "Completion certificate from TryHackMe platform showcasing practical cybersecurity skills and CTF achievements.",
    image: "/certificate/4TryHackMe.png",
    aliases: ["tryhackme", "try hack me", "thm", "tryhackme certificate"],
  },
  ethical_hacking: {
    name: "Ethical Hacking",
    description:
      "Professional certification in ethical hacking methodologies, penetration testing, and vulnerability assessment.",
    image: "/certificate/5Ethical_Hacking.png",
    aliases: ["ethical hacking", "ethical_hacking", "ethical-hacking", "ethical"],
  },
  nmap_mastery: {
    name: "NMAP Mastery",
    description:
      "Advanced certification in network scanning, port analysis, and network reconnaissance using NMAP tools.",
    image: "/certificate/6NMAP Mastery.png",
    aliases: ["nmap", "nmap mastery", "nmap_mastery", "nmap mastery certificate"],
  },
  web_hacking_for_beginners: {
    name: "Web Hacking for Beginners",
    description:
      "Foundational certification in web application security, basic vulnerabilities, and secure coding practices.",
    image: "/certificate/7Web_Hacking_for_Beginners.jpeg",
    aliases: [
      "web hacking for beginners",
      "web_hacking_for_beginners",
      "web hacking",
      "web_hacking",
      "web security",
      "web security beginner",
    ],
  },
  web_pentesting: {
    name: "Web Pentesting",
    description:
      "Comprehensive certification in web application penetration testing, vulnerability exploitation, and security assessment.",
    image: "/certificate/8WebHack_for_Ethical_Hacking.jpeg",
    aliases: [
      "web pentesting",
      "web_pentesting",
      "web pentest",
      "webhack for ethical hacking",
      "webhack_for_ethical_hacking",
    ],
  },
  java_training: {
    name: "Java Training (IIT Bombay)",
    description:
      "Professional Java programming certification from IIT Bombay demonstrating advanced programming and software development skills.",
    image: "/certificate/9Java Training (IIT Bombay).png",
    aliases: ["java training", "java training iit bombay", "java", "java training (iit bombay)"],
  },
  tata_crucible: {
    name: "Tata Crucible Prelims Level 1",
    description:
      "Participation certificate from Tata Crucible innovation challenge demonstrating problem-solving and analytical skills.",
    image: "/certificate/10Tata_Cruible_Prelims_Level1.png",
    aliases: ["tata crucible", "tata", "tata crucible prelims level 1", "tata crucible 1"],
  },
  ibm_skillsbuild: {
    name: "IBM SkillsBuild",
    description:
      "IBM SkillsBuild certification demonstrating proficiency in cloud computing, data analytics, and enterprise technologies.",
    image: "/certificate/11IBM_SkillsBuild.png",
    aliases: ["ibm skillsbuild", "ibm", "skillsbuild"],
  },
};

export const getCertificateKey = (query: string | undefined): string | null => {
  if (!query) return null;
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return null;

  const entries = Object.entries(certificateData);

  for (const [key, payload] of entries) {
    if (normalize(key) === normalizedQuery) return key;
    if (normalize(payload.name) === normalizedQuery) return key;
    if (payload.aliases.some((alias) => normalize(alias) === normalizedQuery)) return key;
  }

  for (const [key, payload] of entries) {
    if (normalize(key).startsWith(normalizedQuery)) return key;
    if (normalize(payload.name).startsWith(normalizedQuery)) return key;
    if (payload.aliases.some((alias) => normalize(alias).startsWith(normalizedQuery))) return key;
  }

  for (const [key, payload] of entries) {
    if (normalize(key).includes(normalizedQuery)) return key;
    if (normalize(payload.name).includes(normalizedQuery)) return key;
    if (payload.aliases.some((alias) => normalize(alias).includes(normalizedQuery))) return key;
  }

  return null;
};

export const getCertificateSuggestions = (
  partial: string,
  currentDir = ""
): string[] => {
  const normalizedPartial = normalize(partial);
  if (currentDir !== "certificates") {
    return [];
  }

  const suggestions = new Set<string>();

  Object.values(certificateData).forEach((payload) => {
    const normalizedName = normalize(payload.name);
    if (!normalizedPartial || normalizedName.startsWith(normalizedPartial)) {
      suggestions.add(payload.name);
      return;
    }

    if (
      normalizedName.includes(normalizedPartial) ||
      payload.aliases.some((alias) => normalize(alias).startsWith(normalizedPartial)) ||
      payload.aliases.some((alias) => normalize(alias).includes(normalizedPartial))
    ) {
      suggestions.add(payload.name);
    }
  });

  return Array.from(suggestions);
};
