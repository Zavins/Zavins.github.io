import '@fontsource/inter';
import MainPage from "./Pages/MainPage";
import theme from "./theme";

import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from '@mui/joy/styles';
import AppBar from "./components/AppBar";


function App() {
    
    return (
        <CssVarsProvider defaultMode="system" theme={theme}>
            <CssBaseline />
            <AppBar/>
            <MainPage/>
        </CssVarsProvider>
    )
}

export default App
