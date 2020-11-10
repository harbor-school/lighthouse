import animation from "../shared/animation"
import breakpoints from "../shared/breakpoints"
import lighting from "../shared/lighting"
import mediaQuery from "../shared/media-query"
import sizing from "../shared/sizing"
import getTypography from "../shared/typography"
import zIndex from "../shared/zIndex"
import { ThemeT } from "../types"
import getFoundationColorTokens from "./color-foundation-tokens"
import getSemanticColorTokens from "./color-semantic-tokens"

export const DarkTheme: ThemeT = {
  colors: {
    ...getFoundationColorTokens(),
    ...getSemanticColorTokens(),
  },
  animation,
  breakpoints,
  lighting,
  mediaQuery,
  sizing,
  typography: getTypography(),
  zIndex,
}
