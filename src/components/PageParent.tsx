import { Box } from "@mui/material"
import React, { useCallback, useEffect, useMemo, useRef } from "react"

interface PageParentProps {
    children: React.ReactNode
}

const PageParent = (props: PageParentProps) => {
    const { children } = props
    const projectContainer = useRef<HTMLDivElement>(null)
    const start = useMemo(() => ({ x: 0, y: 0 }), [])

    const makeScroll = useCallback(
        (e: WheelEvent | TouchEvent) => {
            const deltaY =
                e instanceof WheelEvent ? e.deltaY : start.y - e.changedTouches[0].clientY
            const moveDown = deltaY > 0
            const { scrollHeight, scrollTop, clientHeight } = e.currentTarget as Element
            if (
                (Math.abs(scrollHeight - scrollTop - clientHeight) < 1 && moveDown) ||
                (scrollTop < 1 && !moveDown)
            ) {
                return
            } else {
                e.stopImmediatePropagation()
                e.stopPropagation()
            }
        },
        [start],
    )

    const onTouchStart = useCallback((e: TouchEvent) => {
        start.x = e.changedTouches[0].pageX
        start.y = e.changedTouches[0].pageY
    }, [])

    const onWheel = useCallback(
        (e: WheelEvent) => {
            makeScroll(e)
        },
        [makeScroll],
    )

    const onTouchEnd = useCallback(
        (e: TouchEvent) => {
            makeScroll(e)
        },
        [makeScroll],
    )

    useEffect(() => {
        const container = projectContainer.current
        if (container) {
            container.addEventListener("touchstart", onTouchStart)
            container.addEventListener("touchend", onTouchEnd)
            container.addEventListener("wheel", onWheel)
        }
        return () => {
            if (container) {
                container.removeEventListener("touchstart", onTouchStart, true)
                container.removeEventListener("touchend", onTouchEnd, true)
                container.removeEventListener("wheel", onWheel, true)
            }
        }
    }, [onTouchStart, onTouchEnd, onWheel])

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
