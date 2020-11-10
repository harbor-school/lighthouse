import { AnimationT } from "../types.js"

const animation: AnimationT = {
  timing100: 0.1,
  timing200: 0.2,
  timing300: 0.3,
  timing400: 0.4,
  timing500: 0.5,
  timing600: 0.6,
  timing700: 0.7,
  timing800: 0.8,
  timing900: 0.9,
  timing1000: 1,
  timing2000: 2,
  easeInCurve: [0.8, 0.2, 0.6, 1],
  easeOutCurve: [0.2, 0.8, 0.4, 1],
  easeInOutCurve: [0.4, 0, 0.2, 1],
  easeInQuinticCurve: [0.755, 0.05, 0.855, 0.06],
  easeOutQuinticCurve: [0.23, 1, 0.32, 1],
  easeInOutQuinticCurve: [0.86, 0, 0.07, 1],
  linearCurve: [0, 0, 1, 1],
}

export default animation
