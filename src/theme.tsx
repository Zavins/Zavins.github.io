import { extendTheme } from "@mui/joy/styles"

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#F2F7FF",
          100: "#DCEBFE",
          200: "#BDDAFE",
          300: "#91C3FC",
          400: "#60A5FA",
          500: "#3479E8",
          600: "#2362EA",
          700: "#1D4FD7",
          800: "#1D3FAE",
          900: "#1E3B8A",
          solidBg: "var(--joy-palette-primary-600)",
          solidHoverBg: "var(--joy-palette-primary-500)",
          solidActiveBg: "var(--joy-palette-primary-400)",
        },
        neutral: {
          50: "#ffffff",
          100: "#f1f2f5",
          200: "#e6eaee",
          300: "#d3d6d9",
          400: "#acaeb0",
          500: "#8b8c8e",
          600: "#4e4e4e",
          700: "#2e2f2f",
          800: "#1e1e1f",
          900: "#121212",

          softBg: "var(--joy-palette-neutral-50)",
          softHoverBg: "var(--joy-palette-neutral-100)",
        },
        background: {
          body: "#d1f1fd",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#1D223F",
          100: "#0A318C",
          200: "#1347CC",
          300: "#1055EA",
          400: "#357AEA",
          500: "#2E88F6",
          600: "#50A1FF",
          700: "#acd1fb",
          800: "#DCEBFE",
          900: "#F0F6FF",
          solidBg: "var(--joy-palette-primary-700)",
          solidColor: "var(--joy-palette-common-black)",
          solidHoverBg: "var(--joy-palette-primary-600)",
          solidActiveBg: "var(--joy-palette-primary-400)",
          softHoverBg: "var(--joy-palette-primary-700)",
        },
        background: {
          body: "#120E16",
        },
      },
    },
  },
  fontFamily: {
    display: "'zy_zheng_yuan'",
    body: "'zy_zheng_yuan'",
  },
})
