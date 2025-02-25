import MainPage from "./pages/MainPage"

import { CssBaseline } from "@mui/joy"
import { useColorScheme } from "@mui/joy/styles"
import intl from "react-intl-universal"
import AppBar from "./components/AppBar"

import { useEffect, useState } from "react"
import enUS from "./locales/en-US.json"
import zhCN from "./locales/zh-CN.json"
import ExperiencePage from "./pages/ExperiencePage"
import ProjectPage from "./pages/ProjectPage"
import { FullpageContainer, Page, ScrollContent } from "react-ts-full-page-scroll"

const LOCALES_LIST = [
  {
    label: "English",
    value: "en-US",
  },
  {
    label: "简体中文",
    value: "zh-CN",
  },
]

const LOCALE_DATA = {
  "en-US": enUS,
  "zh-CN": zhCN,
}

// https://github.com/alibaba/react-intl-universal/blob/master/packages/react-intl-universal/examples/browser-example/pages/index.tsx
const initializeIntl = () => {
  // Get the currentLocale from url, cookie, or browser setting
  const currentLocale = intl.determineLocale({
    urlLocaleKey: "lang", // Example: https://fe-tool.com/react-intl-universal?lang=en-US
    cookieLocaleKey: "lang", // Example: "lang=en-US" in cookie
  })

  // Fallback to "en-US" if the currentLocale isn't supported in LOCALES_LIST
  const locales = LOCALES_LIST.filter(
    (item) => item.value.toLowerCase() === currentLocale.toLowerCase(),
  )
  if (locales.length === 0) {
    return "en-US"
  }

  return locales[0].value
}

const App = () => {
  const [initDone, setInitDone] = useState(false)
  const [currentLocale, setCurrentLocale] = useState(initializeIntl())
  const { mode, systemMode, setMode } = useColorScheme()
  const themeMode = (mode === "system" ? systemMode : mode) ?? "light"

  useEffect(() => {
    intl.init({
      currentLocale,
      locales: LOCALE_DATA,
    })
    setInitDone(true)
    document.cookie = `lang=${currentLocale}`
    document.title = intl.get("PORTFOLIO_ZHIYUAN_WANG")
  }, [currentLocale])

  const onLocaleChange = (locale: string) => {
    // set document cookie
    setInitDone(false)
    setCurrentLocale(locale)
  }

  return (
    <>
      <CssBaseline />

      {initDone && (
        <FullpageContainer delay={1000}>
          <ScrollContent>
            <Page className="page" index={0}>
              <AppBar
                locale={currentLocale}
                themeMode={themeMode}
                onLocaleChange={onLocaleChange}
                onDarkModeChange={setMode}
              />
              <MainPage />
            </Page>
            <Page className="page" index={1}>
              <ProjectPage />
            </Page>
            <Page className="page" index={2}>
              <ExperiencePage />
            </Page>
          </ScrollContent>
        </FullpageContainer>
      )}
    </>
  )
}

export default App
