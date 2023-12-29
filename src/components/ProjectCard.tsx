import { GitHub } from "@mui/icons-material"
import {
    AspectRatio,
    Button,
    Card,
    CardActions,
    CardContent,
    CardOverflow,
    Typography,
} from "@mui/joy"
import { useState } from "react"
import ProjectDialog from "./ProjectDialog"

const ProjectCard = () => {
    const [projectDialogOpen, setProjectDialogOpen] = useState(false)

    return (
        <Card variant="soft" sx={{ width: 320 }}>
            <CardOverflow>
                <AspectRatio ratio="2">
                    <img
                        src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ padding: 0 }}>
                <Typography level="title-lg" textAlign="center">
                    Fablix Movie
                </Typography>
                <Typography level="body-sm">
                    A movie store website similar to Netflix. It contains user login, movie search,
                    and checkout page.{" "}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
                <Button variant="solid" color="neutral" endDecorator={<GitHub />}>
                    GitHub
                </Button>
                <Button variant="solid" size="md" onClick={() => setProjectDialogOpen(true)}>
                    View Detail
                </Button>
                <ProjectDialog
                    open={projectDialogOpen}
                    onClose={() => setProjectDialogOpen(false)}
                />
            </CardActions>
        </Card>
    )
}

export default ProjectCard
