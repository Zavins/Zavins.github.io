import { Icon } from "@iconify/react"
import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material"
import {
    AspectRatio,
    Box,
    ButtonGroup,
    Container,
    IconButton,
    Link,
    Modal,
    ModalClose,
    ModalDialog,
    Typography,
} from "@mui/joy"
import { typographyClasses } from "@mui/joy/Typography"
import { useState } from "react"
import intl from "react-intl-universal"
import TypeWriter from "typewriter-effect"
import PageParent from "../components/PageParent"

const MainPage = () => {
    const [wechatDialogOpen, setWechatDialogOpen] = useState(false)

    return (
        <PageParent>
            <Container
                maxWidth={false}
                sx={(theme) => ({
                    position: "relative",
                    minHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "2rem",
                    [theme.breakpoints.up(834)]: {
                        flexDirection: "row",
                        marginTop: "0rem",
                    },
                })}
            >
                <Box
                    sx={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexGrow: 1,
                        gap: "1.4rem",
                        textAlign: "center",
                        [theme.breakpoints.up(834)]: {
                            minWidth: 420,
                            alignItems: "flex-start",
                            textAlign: "initial",
                        },
                        [`& .${typographyClasses.root}`]: {
                            textWrap: "balance",
                        },
                    })}
                >
                    <Typography
                        color="primary"
                        level="title-lg"
                        fontWeight="lg"
                        fontSize="clamp(0.8rem, 0.8rem + 1vw, 1.4rem)"
                    >
                        {intl.get("HI_MY_NAME_IS")}
                    </Typography>
                    <Typography
                        level="h1"
                        fontSize="clamp(2rem, 1.6rem + 2.2vw, 4rem)"
                        sx={{ fontWeight: "900", animation: "slideInRight 0.8s ease forwards" }}
                    >
                        {intl.get("ZHIYUAN_WANG")}
                    </Typography>
                    <Typography
                        component="span"
                        level="body-lg"
                        fontWeight="md"
                        fontSize="clamp(0.5rem, 0.5rem + 2vw, 1.8rem)"
                        sx={{ letterSpacing: "0.4vw", height: "2lh" }}
                    >
                        <TypeWriter
                            options={{ loop: true, delay: 160, autoStart: true }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(intl.get("A_PRAGMATIC_SOFTWARE_ENGINEER"))
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString(
                                        intl.get(
                                            "I_CREATE_SOFTWARE_TO_SOLVE_REAL_WORLD_CHALLENGES",
                                        ),
                                    )
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString(
                                        intl.get(
                                            "A_CODING_ENTHUSIAST_TURNING_CONCEPTS_INTO_REALITY",
                                        ),
                                    )
                                    .pauseFor(1500)
                                    .start()
                            }}
                        />
                    </Typography>
                    <ButtonGroup
                        spacing="1.6rem"
                        aria-label="social media buttons"
                        sx={{ mt: "1rem", animation: "slideInLeft 0.8s ease forwards" }}
                    >
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
                        <IconButton
                            variant="solid"
                            size="lg"
                            onClick={() => setWechatDialogOpen(true)}
                        >
                            <Icon icon="mdi:wechat" height={24} width={24} />
                        </IconButton>
                    </ButtonGroup>
                </Box>
                <AspectRatio
                    ratio={9 / 16}
                    variant="plain"
                    maxHeight="80vh"
                    objectFit="contain"
                    sx={(theme) => ({
                        minWidth: "180px",
                        margin: "2rem",
                        flexGrow: 2,
                        [theme.breakpoints.up(834)]: {
                            flexGrow: 0,
                            minWidth: "320px",
                            "--AspectRatio-maxHeight": "620px",
                            "--AspectRatio-minHeight": "480px",
                        },
                    })}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/images/avatar.png`}
                        alt="Zavins's Avatar"
                    />
                </AspectRatio>
            </Container>
            {/* Add wechat dialog */}
            <Modal open={wechatDialogOpen} onClose={() => setWechatDialogOpen(false)}>
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
                        <img
                            src={`${process.env.PUBLIC_URL}/images/wechat.jpg`}
                            alt="Wechat QR Code"
                        />
                    </AspectRatio>
                </ModalDialog>
            </Modal>
        </PageParent>
    )
}

export default MainPage
