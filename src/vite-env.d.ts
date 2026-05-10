/// <reference types="vite/client" />

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    id: string;
    name: string;
    colors: {
      body: string;
      scrollHandle: string;
      scrollHandleHover: string;
      primary: string;
      secondary: string;
      text: {
        100: string;
        200: string;
        300: string;
      };
      neon?: {
        blue: string;
        electricBlue: string;
        green: string;
        red: string;
        purple: string;
        pink: string;
        orange: string;
        yellow: string;
      };
      glass?: {
        background: string;
        border: string;
        shadow: string;
      };
    };
    backgroundImage?: string;
  }
}
