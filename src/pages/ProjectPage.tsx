import { Grid } from "@mui/joy"
import { useState } from "react"
import intl from "react-intl-universal"
import PageParent from "../components/PageParent"
import PageTitle from "../components/PageTitle"
import ProjectCard from "../components/ProjectCard"
import ProjectDialog from "../components/ProjectDialog"

const ProjectPage = () => {
    const [projectDialogOpen, setProjectDialogOpen] = useState(false)
    const [projectDialogIndex, setProjectDialogIndex] = useState(0)

    const PROJECTS = [
        {
            title: intl.get("FABLIX_MOVIE"),
            description: intl.get("FABLIX_MOVIE_DESCRIPTION"),
            details: intl.get("FABLIX_MOVIE_DETAILS")  as unknown as string[],
            techStacks: ["Java", "JavaScript", "JMeter", "HTML5", "CSS3", "JQuery", "MySQL", "BootStrap", "AWS"],
            img: {
                src: `${process.env.PUBLIC_URL}/images/fablix.png`,
                alt: "Fablix movie website cover picture",
            },
            github: "https://github.com/Zavins/fablix-movie",
            link: "https://fablix.zavins.me"
        },
        {
            title: intl.get("PERSONAL_WEBSITE"),
            description: intl.get("PERSONAL_WEBSITE_DESCRIPTION"),
            details: [],
            techStacks: ["React", "TypeScript", "Material UI", "HTML5", "CSS3", "Docker", "Nginx"],
            img: {
                src: `${process.env.PUBLIC_URL}/images/personal_website.png`,
                alt: "My personal website cover picture",
            },
            github: "https://github.com/Zavins/zavins.github.io",
        },
        {
            title: intl.get("MINDWISE"),
            description: intl.get("MINDWISE_DESCRIPTION"),
            details: [],
            techStacks: ["React", "TypeScript", "Material UI", "HTML5", "CSS3", "Python", "FastAPI", "Docker"],
            img: {
                src: `${process.env.PUBLIC_URL}/images/mindwise.png`,
                alt: "MindWise website cover picture",
            },
            github: "https://github.com/Zavins/mindwise",
            link: "https://mindwise.zavins.me"
        },
        {
            title: intl.get("CRYPTOTRACKER"),
            description: intl.get("CRYPTOTRACKER_DESCRIPTION"),
            details: intl.get("CRYPTOTRACKER_DETAILS") as unknown as string[],
            techStacks: ["Android Studio", "Kotlin"],
            img: {
                src: `${process.env.PUBLIC_URL}/images/cryptotracker.png`,
                alt: "CryptoTracker website cover picture",
            },
            github: "https://github.com/Zavins/CryptoTracker",
        },
        {
            title: intl.get("SEARCH_ENGINE_PROJECT"),
            description: intl.get("SEARCH_ENGINE_PROJECT_DESCRIPTION"),
            details: [],
            techStacks: ["Python", "Beautiful Soup", "React", "Material UI", "CSS3", "JavaScript"],
            img: {
                src: `${process.env.PUBLIC_URL}/images/search_engine_project.png`,
                alt: "Search engine project cover picture",
            },
            github: "https://github.com/Zavins/search-engine-project",
        },
        {
            title: intl.get("PONG_GAME_ONLINE"),
            description: intl.get("PONG_GAME_ONLINE_DESCRIPTION"),
            details: intl.get("PONG_GAME_ONLINE_DETAILS") as unknown as string[],
            techStacks: ["JavaScript", "HTML5", "CSS3"],
            img: {
                src: `${process.env.PUBLIC_URL}/images/pong_game.png`,
                alt: "Pong game online cover picture",
            },
            github: "https://github.com/zavins/PongGame",
            link: "https://pong.zavins.me"
        },
    ];
    

    return (
        <PageParent>
            <PageTitle title={intl.get("TECHNICAL_PROJECTS")} />
            <Grid container rowSpacing={{ xs: 4, lg: 12 }}>
                {PROJECTS.map((project, i) => (
                    <Grid
                        xs={12}
                        md={6}
                        lg={4}
                        key={project.title}
                        display="flex"
                        justifyContent="center"
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            img={project.img}
                            link={project?.link}
                            onClickViewDetail={() => { setProjectDialogOpen(true); setProjectDialogIndex(i) }}
                        />
                    </Grid>
                ))}
            </Grid>
            <ProjectDialog
                title={PROJECTS[projectDialogIndex].title}
                github={PROJECTS[projectDialogIndex].github}
                details={PROJECTS[projectDialogIndex].details}
                techStacks={PROJECTS[projectDialogIndex].techStacks}
                open={projectDialogOpen}
                onClose={() => setProjectDialogOpen(false)}
            />
        </PageParent>
    )
}

export default ProjectPage
