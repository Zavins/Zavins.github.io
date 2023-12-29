import { AspectRatio, Box, Container, Typography } from "@mui/joy"
import { typographyClasses } from "@mui/joy/Typography"
import intl from "react-intl-universal"
import TypeWriter from "typewriter-effect"
import PageParent from "../components/PageParent"
import SocialMediaButtons from "../components/SocialMedialButtons"

const MainPage = () => {
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
                    <SocialMediaButtons />
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
        </PageParent>
    )
}

export default MainPage
