import { Visibility } from "@mui/icons-material"
import {
    AspectRatio,
    Button,
    Card,
    CardActions,
    CardContent,
    CardOverflow,
    Typography,
} from "@mui/joy"
import intl from "react-intl-universal"

interface ProjectCardProps {
    title: string
    description: string
    img: {
        src: string
        alt?: string
    }
    link?: string
    onClickViewDetail: () => void
}

const ProjectCard = (props: ProjectCardProps) => {
    const { title, description, img, link, onClickViewDetail } = props
    return (
        <Card variant="soft" sx={{ width: 320 }}>
            <CardOverflow>
                <AspectRatio ratio="2">
                    <img src={img.src} loading="lazy" alt={img.alt} />
                </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ padding: 0 }}>
                <Typography level="title-lg" textAlign="center" fontWeight="800">
                    {title}
                </Typography>
                <Typography level="body-sm">{description}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
                {link !== undefined && (
                    <Button
                        variant="solid"
                        component="a"
                        href={link}
                        target="_blank"
                        color="neutral"
                        endDecorator={<Visibility />}
                    >
                        {intl.get("VISIT_SITE")}
                    </Button>
                )}
                <Button variant="solid" size="md" onClick={onClickViewDetail}>
                    {intl.get("VIEW_DETAIL")}
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard
