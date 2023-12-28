import { Box } from "@mui/material"
import { ReactNode, useEffect, useRef } from "react"

interface PageParentProps {
    children: ReactNode
}

const PageParent = (props: PageParentProps) => {
    const { children } = props

    const projectContainer = useRef<HTMLElement>()

    const start = { x: 0, y: 0 }

    const makeScroll = (e: WheelEvent | TouchEvent) => {
        const deltaY = e instanceof WheelEvent ? e.deltaY : start.y - e.touches[0].clientY
        const moveDown = deltaY > 0
        const { scrollHeight, scrollTop, clientHeight } = e.currentTarget as Element
        if (
            (Math.abs(scrollHeight - scrollTop - clientHeight) < 1 && moveDown) ||
            (scrollTop < 1 && !moveDown)
        ) {
            // if scroll to bottom and movedown or scroll to top and move up, then allow scroll
            return
        } else {
            e.stopImmediatePropagation()
            e.stopPropagation()
        }
    }

    const onTouchStart = (e: TouchEvent) => {
        start.x = e.touches[0].pageX
        start.y = e.touches[0].pageY
    }

    const onWheel = (e: WheelEvent) => {
        makeScroll(e)
    }

    const onTouchMove = (e: TouchEvent) => {
        makeScroll(e)
    }

    useEffect(() => {
        projectContainer.current?.addEventListener("touchstart", onTouchStart, {
            passive: true,
            capture: true,
        })
        projectContainer.current?.addEventListener("touchmove", onTouchMove, {
            passive: true,
            capture: true,
        })
        projectContainer.current?.addEventListener("wheel", onWheel, {
            passive: true,
            capture: true,
        })
        return () => {
            projectContainer.current?.removeEventListener("touchstart", onTouchStart)
            projectContainer.current?.removeEventListener("touchmove", onTouchMove)
            projectContainer.current?.removeEventListener("wheel", onWheel)
        }
    }, [])

    return (
        <Box
            ref={projectContainer}
            sx={{
                height: "100%",
                paddingLeft: "4vw",
                paddingRight: "4vw",
                overflowY: "scroll",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { width: 0 },
            }}
        >
            {children}
        </Box>
    )
}

export default PageParent
