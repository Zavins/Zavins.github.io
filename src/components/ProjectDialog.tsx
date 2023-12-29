import {
    Modal,
    ModalClose,
    ModalDialog,
    Typography
} from "@mui/joy"
import { Box } from "@mui/material"

interface ProjectDialogProps {
    open: boolean
    onClose: () => void
}

const ProjectDialog = (props: ProjectDialogProps) => {
    const { open, onClose } = props
    return (
        <div onWheel={(e) => e.stopPropagation()}>
            <Modal open={open} onClose={onClose}>
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
    )
}

export default ProjectDialog