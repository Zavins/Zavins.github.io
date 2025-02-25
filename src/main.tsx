import { CssVarsProvider } from "@mui/joy"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import theme from "./theme"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <CssVarsProvider defaultMode="system" theme={theme}>
      <App />
    </CssVarsProvider>
  </React.StrictMode>,
)
