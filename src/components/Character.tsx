import { Box } from "@mui/joy"
import { useCallback, useEffect, useRef } from "react"

const CANVAS_WIDTH = 1000
const CANVAS_HEIGHT = 2200
const LEFT_EYE_X = 340
const LEFT_EYE_Y = 600
const RIGHT_EYE_X = 675
const RIGHT_EYE_Y = 585
const EYE_RADIUS_X = 50
const EYE_RADIUS_Y = 58
const MAX_OFFSET_RADIUS_X = 48
const MAX_OFFSET_RADIUS_Y = 40
const MIN_RADIUS_MULTIPLER_X = 1
const MIN_RADIUS_MULTIPLER_Y = 0.8

const Character = () => {
  const eyeCanvasRef = useRef<HTMLCanvasElement>(null)

  const drawEyes = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      lOffsetX?: number,
      lOffsetY?: number,
      rOffsetX?: number,
      rOffsetY?: number,
      radiusXMultipler?: number,
      radiusYMultipler?: number,
    ) => {
      // Draw eye
      lOffsetX = lOffsetX ? lOffsetX : 0
      lOffsetY = lOffsetY ? lOffsetY : 0
      rOffsetX = rOffsetX ? rOffsetX : 0
      rOffsetY = rOffsetY ? rOffsetY : 0
      radiusXMultipler = radiusXMultipler ? radiusXMultipler : 1
      radiusYMultipler = radiusYMultipler ? radiusYMultipler : 1

      ctx.beginPath()
      ctx.ellipse(
        LEFT_EYE_X + lOffsetX,
        LEFT_EYE_Y + lOffsetY,
        EYE_RADIUS_X * radiusXMultipler,
        EYE_RADIUS_Y * radiusYMultipler,
        Math.PI,
        (Math.PI / 4) * 3,
        Math.PI / 4,
      )
      ctx.fillStyle = "black"
      ctx.fill()

      ctx.beginPath()
      ctx.ellipse(
        RIGHT_EYE_X + rOffsetX,
        RIGHT_EYE_Y + rOffsetY,
        EYE_RADIUS_X * radiusXMultipler,
        EYE_RADIUS_Y * radiusYMultipler,
        Math.PI,
        (Math.PI / 4) * 3,
        Math.PI / 4,
      )
      ctx.fillStyle = "black"
      ctx.fill()
    },
    [],
  )

  const updateEyes = useCallback(
    (ctx: CanvasRenderingContext2D, mouseX: number, mouseY: number, canvasBoudingRect: DOMRect) => {
      const lEyeCenterX =
        canvasBoudingRect.x + (LEFT_EYE_X / CANVAS_WIDTH) * canvasBoudingRect.width
      const lEyeCenterY =
        canvasBoudingRect.y + (LEFT_EYE_Y / CANVAS_HEIGHT) * canvasBoudingRect.height
      const rEyeCenterX =
        canvasBoudingRect.x + (RIGHT_EYE_X / CANVAS_WIDTH) * canvasBoudingRect.width
      const rEyeCenterY =
        canvasBoudingRect.y + (RIGHT_EYE_Y / CANVAS_HEIGHT) * canvasBoudingRect.height
      // clear current canvas
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      // calculate the values
      const lDeltaX = mouseX - lEyeCenterX
      const lDeltaY = Math.min(mouseY - lEyeCenterY, 0) // only look up
      const rDeltaX = mouseX - rEyeCenterX
      const rDeltaY = Math.min(mouseY - rEyeCenterY, 0) // only look up
      const lOffSetXMultipler = Math.abs(lDeltaX) / window.innerWidth
      const lOffsetYMultipler = Math.abs(lDeltaY) / window.innerHeight
      const rOffsetXMultipler = Math.abs(rDeltaX) / window.innerWidth
      const rOffsetYMultipler = Math.abs(rDeltaY) / window.innerHeight
      const lAngle = Math.atan2(lDeltaY, lDeltaX)
      const rAngle = Math.atan2(rDeltaY, rDeltaX)
      const lOffsetX = lOffSetXMultipler * MAX_OFFSET_RADIUS_X * Math.cos(lAngle)
      const lOffsetY = lOffsetYMultipler * MAX_OFFSET_RADIUS_Y * Math.sin(lAngle)
      const rOffsetX = rOffsetXMultipler * MAX_OFFSET_RADIUS_X * Math.cos(rAngle)
      const rOffsetY = rOffsetYMultipler * MAX_OFFSET_RADIUS_Y * Math.sin(rAngle)
      const radiusXMultipler = Math.max(
        1 - (lOffSetXMultipler + rOffsetXMultipler) / 2,
        MIN_RADIUS_MULTIPLER_X,
      )
      const radiusYMultipler = Math.max(
        1 - (lOffsetYMultipler + rOffsetYMultipler) / 2,
        MIN_RADIUS_MULTIPLER_Y,
      )

      drawEyes(ctx, lOffsetX, lOffsetY, rOffsetX, rOffsetY, radiusXMultipler, radiusYMultipler)
    },
    [],
  )

  useEffect(() => {
    if (eyeCanvasRef.current) {
      const eyeCtx = eyeCanvasRef.current.getContext("2d")
      drawEyes(eyeCtx!)
      const mouseMoveHandler = (e: MouseEvent) => {
        updateEyes(eyeCtx!, e.clientX, e.clientY, eyeCanvasRef.current!.getBoundingClientRect())
      }
      document.addEventListener("mousemove", mouseMoveHandler)
      return () => document.removeEventListener("mousemove", mouseMoveHandler)
    }
  }, [eyeCanvasRef])

  return (
    <Box
      sx={(theme) => ({
        width: "20vh",
        aspectRatio: 10 / 22,
        margin: "2rem",
        flexGrow: 2,
        [theme.breakpoints.up(834)]: {
          flexGrow: 0,
          width: 300,
        },
      })}
    >
      <canvas
        ref={eyeCanvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{
          width: "inherit",
          height: "inherit",
          background: `url('${process.env.PUBLIC_URL}/images/avatar_no_eyes.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
    </Box>
  )
}

export default Character
