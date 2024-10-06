import Translate from "@mui/icons-material/Translate"
import { Box, Button, Container } from "@mui/joy"
import DarkmodeToggle from "./DarkModeToggle"

interface AppBarProps {
  locale: string
  themeMode: string
  onLocaleChange: (locale: string) => void
  onDarkModeChange: (mode: "light" | "dark") => void
}

const AppBar = (props: AppBarProps) => {
  const { locale, themeMode, onLocaleChange, onDarkModeChange } = props

  return (
    <Container
      maxWidth={false}
      sx={{ paddingTop: "24px", display: "flex", justifyContent: "space-between" }}
    >
      <div>{/* Place holder */}</div>
      <Box justifyContent="center" alignItems="center" display="flex" gap={2}>
        <Button
          size="sm"
          startDecorator={<Translate />}
          onClick={() => {
            onLocaleChange(locale === "en-US" ? "zh-CN" : "en-US")
          }}
        >
          {locale === "en-US" ? "中文" : "English"}
        </Button>
        <DarkmodeToggle
          checked={themeMode === "dark"}
          onChange={() => onDarkModeChange(themeMode === "dark" ? "light" : "dark")}
        />
      </Box>
    </Container>
  )
}

export default AppBar
