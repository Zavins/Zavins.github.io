import { Grid } from "@mui/joy"
import { useState } from "react"
import intl from "react-intl-universal"
import PageParent from "../components/PageParent"
import PageTitle from "../components/PageTitle"
import ProjectCard from "../components/ProjectCard"
import ProjectDialog from "../components/ProjectDialog"

const ProjectPage = () => {
    const [projectDialogOpen, setProjectDialogOpen] = useState(false)

    const PROJECTS = [
        {
            title: "Fablix Movie",
            description:
                "A movie store website similar to Netflix. It contains user-friendly login, search, and checkout pages, available as both a website and an Android app.",
            img: {
                src: `${process.env.PUBLIC_URL}/images/fablix.png`,
                alt: "Fablix movie website cover picture",
            },
            github: "https://github.com/Zavins/fablix-movie",
        },
        {
            title: "Personal Website",
            description:
                "My personal wesbite demonstrates previous experiences and projects. This website is thoughtfully designed to be accessible in both English and Chinese.",
            img: {
                src: `${process.env.PUBLIC_URL}/images/personal_website.png`,
                alt: "My personal website cover picture",
            },
            github: "https://github.com/Zavins/zavins.github.io",
        },
        {
            title: "MindWise",
            description:
                "MindWise helps to visualize complex ideas and concepts. The application utilizes AI to create organized mind maps and intuitive explanations for the input text.",
            img: {
                src: `${process.env.PUBLIC_URL}/images/mindwise.png`,
                alt: "MindWise website cover picture",
            },
            github: "https://github.com/Zavins/mindwise",
        },
        {
            title: "CryptoTracker",
            description:
                "A android application designed to enable users to track real-time cryptocurrency prices, offering a user-friendly interface for monitoring market trends.",
            img: {
                src: `${process.env.PUBLIC_URL}/images/cryptotracker.png`,
                alt: "CryptoTracker website cover picture",
            },
            github: "https://github.com/Zavins/CryptoTracker",
        },
        {
            title: "Search Engine Project",
            description:
                "The project comprises a web crawler, an index builder, a search engine, and a web interface, allowing users to search through more than 2GB of data in milliseconds.",
            img: {
                src: `${process.env.PUBLIC_URL}/images/search_engine_project.png`,
                alt: "Search engine project cover picture",
            },
            github: "https://github.com/Zavins/search-engine-project",
        },
        {
            title: "Pong Game Online",
            description:
                "An online pong game battle game featuring innovative paddle controls. Players will compete against a sophisticated AI opponent.",
            img: {
                src: `${process.env.PUBLIC_URL}/images/pong_game.png`,
                alt: "Pong game online cover picture",
            },
            github: "https://github.com/zavins/PongGame",
        },
    ]

    return (
        <PageParent>
            <PageTitle title={intl.get("TECHNICAL_PROJECTS")} />
            <Grid container rowSpacing={{ xs: 4, lg: 12 }}>
                {PROJECTS.map((project) => (
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
                            github={project.github}
                            onClickViewDetail={() => setProjectDialogOpen(true)}
                        />
                    </Grid>
                ))}
            </Grid>
            <ProjectDialog open={projectDialogOpen} onClose={() => setProjectDialogOpen(false)} />
        </PageParent>
    )
}

export default ProjectPage
