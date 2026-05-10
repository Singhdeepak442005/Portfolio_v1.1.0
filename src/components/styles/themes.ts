import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  kali: {
    id: "T_007",
    name: "kali",
    colors: {
      body: "#0A0A0A",
      scrollHandle: "#00B4FF",
      scrollHandleHover: "#00D4FF",
      primary: "#00B4FF",
      secondary: "#FF3B30",
      text: {
        100: "#F8F9FA",
        200: "#E9ECEF",
        300: "#ADB5BD",
      },
      // Cyberpunk neon colors
      neon: {
        blue: "#00B4FF",
        electricBlue: "#00D4FF",
        green: "#00FF88",
        red: "#FF3B30",
        purple: "#A855F7",
        pink: "#EC4899",
        orange: "#F97316",
        yellow: "#FACC15",
      },
      // Glassmorphism colors
      glass: {
        background: "rgba(10, 10, 10, 0.85)",
        border: "rgba(255, 255, 255, 0.08)",
        shadow: "rgba(0, 0, 0, 0.4)",
      },
    },
    backgroundImage: "https://www.kali.org/wallpapers/images/2024/kali-ferrofluid.jpg",
  },
};

export default theme;
