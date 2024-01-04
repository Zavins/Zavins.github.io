import { Box, Typography, TypographyProps } from "@mui/joy"

const ProjectDescTypography = (props: TypographyProps) => {
    return (
        <Box
            sx={{
                display: "inline-block",
                paddingLeft: "6px",
                borderLeft: "3px solid",
                borderColor: "#779eb9",
                backgroundColor: "#88888818",
            }}
        >
            <Typography {...props} />
        </Box>
    )
}

export default ProjectDescTypography
