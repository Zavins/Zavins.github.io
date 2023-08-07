import { AspectRatio, Box, Container, Typography } from "@mui/joy"
import PageParent from "../components/PageParent"
import { typographyClasses } from '@mui/joy/Typography';

const MainPage = () => {
    return (
        <PageParent>
            <Container
                maxWidth={false}
                sx={(theme) => ({
                    position: 'relative',
                    minHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 4,
                    [theme.breakpoints.up(834)]: {
                        flexDirection: 'row',
                        gap: 6,
                    },
                    [theme.breakpoints.up(1199)]: {
                        gap: 12,
                    },
                })}
            >
                <Box
                    sx={(theme) => ({
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        textAlign: 'center',
                        [theme.breakpoints.up(834)]: {
                            minWidth: 420,
                            alignItems: 'flex-start',
                            textAlign: 'initial',
                        },
                        [`& .${typographyClasses.root}`]: {
                            textWrap: 'balance',
                        },
                    })}
                >
                    <Typography color="primary" level="title-lg" fontWeight="lg" fontSize="clamp(0.8rem, 0.8rem + 1vw, 1.4rem)">
                        Hi, my name is
                    </Typography>
                    <Typography
                        level="h1"
                        fontWeight="xl"
                        fontSize="clamp(2rem, 1.6rem + 2.2vw, 4rem)"
                    >
                        ZhiYuan Wang
                    </Typography>
                    <Typography level="body-lg"  fontWeight="md" fontSize="clamp(1.2rem, 1.2rem + 1vw, 2rem)" sx={{letterSpacing: "0.5rem"}}>
                        A pragmatic Software Engineer
                        {/* I create software to solve real-world challenges
                        A coding enthusiast turning concepts into reality. */}
                    </Typography>
                </Box>
                {/* <AspectRatio
                    ratio={600 / 520}
                    variant="outlined"
                    maxHeight={300}
                    sx={(theme) => ({
                        minWidth: 100,
                        alignSelf: 'stretch',
                        [theme.breakpoints.up(834)]: {
                            alignSelf: 'initial',
                            flexGrow: 1,
                            '--AspectRatio-maxHeight': '520px',
                            '--AspectRatio-minHeight': '400px',
                        },
                        borderRadius: 'sm',
                        bgcolor: 'background.level2',
                    })}
                >
                    <img
                        src=""
                        alt=""
                    />
                </AspectRatio> */}
            </Container>
        </PageParent>
    )
}

export default MainPage