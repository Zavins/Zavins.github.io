import { Container, useColorScheme } from "@mui/joy"
import { ReactNode } from "react"

interface PageParentProps {
    children: ReactNode
}


const PageParent = (props: PageParentProps) => {
    const { children } = props
    const { mode, systemMode} = useColorScheme();
    const themeMode = mode === "system" ? systemMode : mode

    return (
        <Container maxWidth={false} disableGutters sx={{ height: "100%", paddingLeft: '4vw', paddingRight: '4vw' }}>
            {children}
        </Container>
    )


}

export default PageParent