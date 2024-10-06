import { RocketLaunch } from "@mui/icons-material"
import { Avatar, Typography, useTheme } from "@mui/joy"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

interface TimelineLogoProps {
  src: string
  alt?: string
}

interface TimelineProps {
  events: {
    title: string
    subtitle: string
    detail: string
    icon: {
      src: string
      alt?: string
    }
    date: string
  }[]
}

const ICON_STYLE = {
  background: "#FFF",
  boxShadow: "0 0 0 4px #fff, inset 0 0px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
}

const TimelineLogo = (props: TimelineLogoProps) => {
  const { src, alt } = props
  return (
    <Avatar alt={alt} src={src} sx={{ width: "100%", height: "100%", background: "transparent" }} />
  )
}

const Timeline = (props: TimelineProps) => {
  // const {events} = props
  const theme = useTheme()

  const backgroundColor = theme.palette.mode === "dark" ? "#636b74" : "#FFFFFF"
  const boxShadow = `var(--joy-shadowRing, 0 0 #000),
    0px 1px 2px 0px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)),
    0px 2px 4px 0px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08))`

  const { events } = props

  return (
    <VerticalTimeline>
      {events.map((e, index) => (
        <VerticalTimelineElement
          key={e.title}
          date={e.date}
          dateClassName="timeline-date"
          contentStyle={{
            background: index === 0 ? "#458cc8" : backgroundColor,
            borderRadius: 16,
            boxShadow: boxShadow,
          }}
          contentArrowStyle={{
            borderRight: `7px solid ${index === 0 ? "#458cc8" : backgroundColor}`,
          }}
          iconStyle={ICON_STYLE}
          icon={<TimelineLogo src={e.icon.src} alt={e.icon.alt} />}
        >
          <Typography
            level="h3"
            fontWeight="800"
            sx={{ fontSize: "clamp(16px, 4.6vw, 26px)", whiteSpace: "nowrap" }}
          >
            {e.title}
          </Typography>
          <Typography
            level="h4"
            sx={{ fontSize: "clamp(12px, 3.2vw, 16px)", whiteSpace: "nowrap" }}
          >
            {e.subtitle}
          </Typography>
          <Typography level="body-lg">{e.detail}</Typography>
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        iconStyle={ICON_STYLE}
        icon={<RocketLaunch sx={{ color: "#c34a32", transform: "scale(1.3)" }} />}
      />
    </VerticalTimeline>
  )
}

export default Timeline
