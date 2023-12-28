import { Grid } from "@mui/joy"
import intl from "react-intl-universal"
import PageParent from "../components/PageParent"
import PageTitle from "../components/PageTitle"
import ProjectCard from "../components/ProjectCard"

const ProjectPage = () => {
    return (
        <PageParent>
            <PageTitle title={intl.get("TECHNICAL_PROJECTS")} />
            <Grid container rowSpacing={{ xs: 4, lg: 12 }}>
                <Grid xs={12} md={6} lg={4} display="flex" justifyContent="center">
                    <ProjectCard />
                </Grid>
                <Grid xs={12} md={6} lg={4} display="flex" justifyContent="center">
                    <ProjectCard />
                </Grid>
                <Grid xs={12} md={6} lg={4} display="flex" justifyContent="center">
                    <ProjectCard />
                </Grid>
                <Grid xs={12} md={6} lg={4} display="flex" justifyContent="center">
                    <ProjectCard />
                </Grid>
                <Grid xs={12} md={6} lg={4} display="flex" justifyContent="center">
                    <ProjectCard />
                </Grid>
                <Grid xs={12} md={6} lg={4} display="flex" justifyContent="center">
                    <ProjectCard />
                </Grid>
            </Grid>
        </PageParent>
    )
}

export default ProjectPage
