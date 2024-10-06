import { GitHub } from "@mui/icons-material"
import { Box, IconButton } from "@mui/joy"

interface ProjectGithubButtonProps {
  github: string
}

const ProjectGithubButton = (props: ProjectGithubButtonProps) => {
  const { github } = props
  return (
    <>
      <IconButton
        size="lg"
        variant="solid"
        component="a"
        href={github}
        target="_blank"
        sx={{
          position: "absolute",
          aspectRatio: 1,
          width: "50px",
          top: "0px",
          left: "0px",
          padding: "5px",
          justifyContent: "start",
          alignItems: "start",
          borderRadius: "0px",
          borderTopLeftRadius: "8px",
          borderBottomRightRadius: "50px",
          fontSize: "32px",
          transition: "0.2s ease-in-out",
          ":hover": {
            width: "50px",
            fontSize: "41px",
            borderBottomRightRadius: "50px",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "50px",
          },
        }}
      >
        <GitHub fontSize="inherit" />
      </IconButton>
      <Box height="24px">{/* Placeholder */}</Box>
    </>
  )
}

export default ProjectGithubButton
