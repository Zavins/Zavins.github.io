import { GitHub } from "@mui/icons-material"
import {
    AspectRatio,
    Button,
    Card,
    CardActions,
    CardContent,
    CardOverflow,
    Modal,
    ModalClose,
    ModalDialog,
    Typography,
} from "@mui/joy"
import { Box } from "@mui/material"
import { useState } from "react"

const ProjectCard = () => {
    const [detailDialogOpen, setDetailDialogOpen] = useState(false)

    return (
        <>
            <Card variant="soft" sx={{ width: 320 }}>
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <img
                            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
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
                        A movie store website similar to Netflix. It contains user login, movie
                        search, and checkout page.{" "}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button variant="solid" color="neutral" endDecorator={<GitHub />}>
                        GitHub
                    </Button>
                    <Button variant="solid" size="md" onClick={() => setDetailDialogOpen(true)}>
                        View Detail
                    </Button>
                </CardActions>
            </Card>
            <div onWheel={(e) => e.stopPropagation()}>
                <Modal open={detailDialogOpen} onClose={() => setDetailDialogOpen(false)}>
                    <ModalDialog
                        aria-labelledby="variant-modal-title"
                        aria-describedby="variant-modal-description"
                        variant="plain"
                        sx={{ gap: "1rem" }}
                    >
                        <ModalClose />

                        <Typography level="h2" textColor="inherit">
                            Title
                        </Typography>
                        <Typography level="body-lg" textColor="inherit">
                            Tech stacks:
                        </Typography>
                        <Box sx={{ overflowY: "auto" }}>{/* use 切塊 */}</Box>
                    </ModalDialog>
                </Modal>
            </div>
        </>
    )
}

export default ProjectCard
