import { Icon } from "@iconify/react"
import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material"
import { ButtonGroup, IconButton, Link } from "@mui/joy"
import { useState } from "react"
import WechatDialog from "./WechatDialog"

const SocialMediaButtons = () => {
    const [wechatDialogOpen, setWechatDialogOpen] = useState(false)
    return (
        <ButtonGroup
            spacing="1.6rem"
            aria-label="social media buttons"
            sx={{ mt: "1rem", animation: "slideInLeft 0.8s ease forwards" }}
        >
            <WechatDialog open={wechatDialogOpen} onClose={() => setWechatDialogOpen(false)} />
            <IconButton
                component={Link}
                variant="solid"
                size="lg"
                href="mailto:zywang1@uci.edu"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Email />
            </IconButton>
            <IconButton
                component={Link}
                variant="solid"
                size="lg"
                href="https://www.github.com/zavins"
                target="_blank"
            >
                <GitHub />
            </IconButton>
            <IconButton
                component={Link}
                variant="solid"
                size="lg"
                href="https://www.linkedin.com/in/zhiyuan-w"
                target="_blank"
            >
                <LinkedIn />
            </IconButton>
            <IconButton
                component={Link}
                variant="solid"
                size="lg"
                href="https://www.instagram.com/zavins_"
                target="_blank"
            >
                <Instagram />
            </IconButton>
            <IconButton variant="solid" size="lg" onClick={() => setWechatDialogOpen(true)}>
                <Icon icon="mdi:wechat" height={24} width={24} />
            </IconButton>
        </ButtonGroup>
    )
}

export default SocialMediaButtons
