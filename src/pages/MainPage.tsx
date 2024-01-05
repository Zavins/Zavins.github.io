import { Box, Container, Typography } from "@mui/joy"
import { typographyClasses } from "@mui/joy/Typography"
import intl from "react-intl-universal"
import TypeWriter from "typewriter-effect"
import Character from "../components/Character"
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
                    justifyContent: "space-around",
                    alignItems: "center",
                    paddingTop: "2rem",
                    [theme.breakpoints.up(834)]: {
                        flexDirection: "row",
                        paddingTop: "0rem",
                    },
                })}
            >
                <Box
                    sx={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexGrow: 1,
                        justifyContent: "space-even",
                        textAlign: "center",
                        [theme.breakpoints.up(834)]: {
                            minWidth: 420,
                            alignItems: "flex-start",
                            textAlign: "initial",
                            gap: "1.4rem",
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
                        fontSize="clamp(2rem, 1.6rem + 2.2vw, 5rem)"
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
                <Character />
            </Container>
        </PageParent>
    )
}

export default MainPage
