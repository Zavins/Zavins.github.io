import { Chip, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy"
import { Box } from "@mui/material"
import intl from "react-intl-universal"
import ProjectDescTypography from "./ProjectDescTypography"
import ProjectGithubButton from "./ProjectGithubButton"

const TECH_STACK_COLOR = {
    "Android Studio": "#3DDC84",
    ArgoCD: "#f9511e",
    AWS: "#FF9900",
    "Beautiful Soup": "#8CBA51",
    BootStrap: "#7952B3",
    "C#": "#68217A",
    "C++": "#00599C",
    CSS3: "#264de4",
    Docker: "#2496ED",
    FastAPI: "#009688",
    HTML5: "#E34F26",
    Java: "#f89820",
    JavaScript: "#d6a71a",
    JMeter: "#E40000",
    JQuery: "#0769AD",
    Kotlin: "#7F52FF",
    Kubernetes: "#326CE5",
    MongoDB: "#47A248",
    "Material UI": "#007FFF",
    MySQL: "#4479A1",
    Nginx: "#009639",
    NodeJS: "#3C873A",
    Python: "#3776AB",
    React: "#61DAFB",
    TypeScript: "#3178C6",
}

interface ProjectDialogProps {
    title: string
    github: string
    techStacks: string[]
    details: string[]
    open: boolean
    onClose: () => void
}

const ProjectDialog = (props: ProjectDialogProps) => {
    const { title, github, techStacks, details, open, onClose } = props
    return (
        <Modal open={open} onClose={onClose} onWheel={(e) => e.stopPropagation()}>
            <ModalDialog
                aria-labelledby="variant-modal-title"
                aria-describedby="variant-modal-description"
                variant="plain"
            >
                <ModalClose />
                <ProjectGithubButton github={github} />
                <Typography
                    level="h2"
                    fontWeight="800"
                    sx={{
                        fontSize: "clamp(20px, 4.8vw, 28px)",
                        whiteSpace: "nowrap",
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    level="h4"
                    sx={{ fontSize: "clamp(14px, 3.2vw, 16px)", whiteSpace: "nowrap" }}
                >
                    {intl.get("TECH_STACKS")}:
                </Typography>
                <Box gap={1} display="flex" flexWrap="wrap">
                    {techStacks.map((name) => (
                        <Chip
                            key={name}
                            variant="solid"
                            sx={{
                                bgcolor: TECH_STACK_COLOR[name as keyof typeof TECH_STACK_COLOR],
                                fontWeight: "800",
                                textShadow: "1px 1px #414141",
                            }}
                        >
                            {name}
                        </Chip>
                    ))}
                </Box>
                <Typography
                    level="h4"
                    sx={{ fontSize: "clamp(14px, 3.2vw, 16px)", whiteSpace: "nowrap" }}
                >
                    {intl.get("DETAILS")}:
                </Typography>
                <Box display="flex" flexDirection="column" gap="0.5rem" overflow="auto">
                    {details.map((detail, i) => (
                        <ProjectDescTypography
                            key={i}
                            sx={{ fontSize: "clamp(14px, 3.2vw, 16px)" }}
                        >
                            {detail}
                        </ProjectDescTypography>
                    ))}
                </Box>
            </ModalDialog>
        </Modal>
    )
}

export default ProjectDialog
