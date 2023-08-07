import { Typography } from "@mui/material"
import DarkmodeToggle from "./DarkModeToggle"
import { Container, useColorScheme } from "@mui/joy"


const AppBar = () => {
    const { mode, systemMode, setMode } = useColorScheme();
    const themeMode = mode === "system" ? systemMode : mode

    return(
        <Container maxWidth={false} sx={{position: "fixed", zIndex: 1, paddingY: "24px", display: "flex", justifyContent: "space-between"}}>
            <div></div> 
            <DarkmodeToggle checked={themeMode === "dark"} onChange={()=>setMode(themeMode === "dark" ? "light" : "dark")}/>
        </Container>
    )
}

export default AppBar