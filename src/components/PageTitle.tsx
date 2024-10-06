import { Typography } from "@mui/joy"

interface PageTitleProps {
  title: string
}

const PageTitle = (props: PageTitleProps) => {
  const { title } = props
  return (
    <Typography
      textAlign="center"
      level="h1"
      paddingY="2rem"
      sx={{
        fontWeight: "900",
        fontSize: "clamp(20px, 10vw, 48px)",
        whiteSpace: "nowrap",
        textShadow: "2px 2px 0px #779eb9",
        mixBlendMode: "screen",
        animation: "slideInRight 0.8s ease forwards",
      }}
    >
      {title}
    </Typography>
  )
}

export default PageTitle
