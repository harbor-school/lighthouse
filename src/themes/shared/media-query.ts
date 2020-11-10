import { getMediaQuery } from "../../helpers/responsive-helpers.js"
import breakpoints from "./breakpoints.js"
import { MediaQueryT } from "../types.js"

const mediaQuery: MediaQueryT = {
  small: getMediaQuery(breakpoints.small),
  medium: getMediaQuery(breakpoints.medium),
  large: getMediaQuery(breakpoints.large),
  xLarge: getMediaQuery(breakpoints.xLarge),
}

export default mediaQuery
