import { AspectRatio, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy"
import intl from "react-intl-universal"

interface WechatModalProps {
  open: boolean
  onClose: () => void
}

const WechatDialog = (props: WechatModalProps) => {
  const { open, onClose } = props

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        aria-labelledby="variant-modal-title"
        aria-describedby="variant-modal-description"
        variant="plain"
        sx={{ gap: "1rem" }}
      >
        <ModalClose />
        <Typography level="title-lg" textColor="inherit">
          {intl.get("SCAN_TO_ADD_ME")}
        </Typography>
        <AspectRatio
          ratio={3 / 4}
          variant="plain"
          sx={() => ({
            minWidth: "240px",
            borderRadius: 20,
          })}
        >
          <img src={`/images/wechat.jpg`} alt="Wechat QR Code" />
        </AspectRatio>
      </ModalDialog>
    </Modal>
  )
}

export default WechatDialog
