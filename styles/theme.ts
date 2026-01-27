export const theme = {
  colors: {
    primary: "#FF8310",
    background: "#232323",
    surface: "#191A20",
    gray: "#393939",
    lightGray: "#CCCCCC",
    white: "#FFFFFF",
  },
  borderRadius: "8px",
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    sl: "1280px",
    xl: "1440px",
  },
  containers: {
    sm: "600px",
    md: "720px",
    lg: "960x",
    sl: "1200px",
    xl: "1400px", 
  }
};

export type ThemeType = typeof theme;
