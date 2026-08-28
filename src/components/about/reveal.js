import * as React from "react"
import Box from "@mui/material/Box"

const REDUCED_MOTION = `(prefers-reduced-motion: reduce)`

// True once the element has scrolled into view. Also true immediately when the
// visitor asked for reduced motion, or when IntersectionObserver is missing —
// content should never depend on an animation to become readable.
export function useReveal({ margin = 0.08 } = {}) {
  const ref = React.useRef(null)
  const [shown, setShown] = React.useState(false)
  const [instant, setInstant] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const reduced =
      typeof window.matchMedia === `function` &&
      window.matchMedia(REDUCED_MOTION).matches

    if (reduced) {
      setInstant(true)
      setShown(true)
      return undefined
    }

    let done = false
    const finish = () => {
      if (done) return
      done = true
      setShown(true)
      cleanup()
    }

    // Rect check rather than `isIntersecting`: a fast jump (anchor link, End
    // key, restored scroll position) can move an element from below the fold to
    // above it without ever sampling a visible frame, and observer-only logic
    // leaves that content invisible forever.
    // One comparison covers all three cases: still below the fold (top is past
    // the trigger line), entering it, and already scrolled past (top negative).
    const passed = () =>
      node.getBoundingClientRect().top < window.innerHeight * (1 - margin)

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        if (passed()) finish()
      })
    }

    const observer =
      typeof IntersectionObserver === `function`
        ? new IntersectionObserver(
            entries => {
              if (entries.some(e => e.isIntersecting)) finish()
            },
            { rootMargin: `0px 0px -${Math.round(margin * 100)}% 0px` }
          )
        : null

    function cleanup() {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener(`scroll`, onScroll)
      window.removeEventListener(`resize`, onScroll)
      if (observer) observer.disconnect()
    }

    if (passed()) {
      finish()
      return cleanup
    }

    if (observer) observer.observe(node)
    window.addEventListener(`scroll`, onScroll, { passive: true })
    window.addEventListener(`resize`, onScroll, { passive: true })
    return cleanup
  }, [margin])

  return { ref, shown, instant }
}

export const revealSx = ({ shown, instant, delay = 0, distance = 14 }) => ({
  opacity: shown ? 1 : 0,
  transform: shown ? `none` : `translateY(${distance}px)`,
  transition: instant
    ? `none`
    : `opacity 480ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms,
       transform 480ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  willChange: shown ? `auto` : `opacity, transform`,
})

export default function Reveal({ delay = 0, distance, sx, children, ...rest }) {
  const { ref, shown, instant } = useReveal()
  return (
    <Box
      ref={ref}
      data-reveal=""
      sx={{ ...revealSx({ shown, instant, delay, distance }), ...sx }}
      {...rest}
    >
      {children}
    </Box>
  )
}

// Keeps the page readable if JavaScript never runs.
export const NoScriptReveal = () => (
  <noscript
    dangerouslySetInnerHTML={{
      __html: `<style>[data-reveal]{opacity:1!important;transform:none!important}</style>`,
    }}
  />
)
