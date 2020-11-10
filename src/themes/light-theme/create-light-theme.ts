import * as System from "../../lighthouse"
import { ColorScaleTokensT } from "../../tokens"
import { ColorTokensT } from "../../tokens/types"
import deepMerge from "../../utils/deep-merge"
import animation from "../shared/animation"
import breakpoints from "../shared/breakpoints"
import lighting from "../shared/lighting"
import mediaQuery from "../shared/media-query"
import sizing from "../shared/sizing"
import getTypography from "../shared/typography"
import zIndex from "../shared/zIndex"
import { FontTokensT } from "./../types"
import getFoundationColorTokens from "./color-foundation-tokens"
import getSemanticColorTokens from "./color-semantic-tokens"

interface PrimitivesT extends Partial<FontTokensT>, Partial<ColorTokensT> {
  customColorScale?: ColorScaleTokensT
}

export default function createLightTheme(
  primitives: PrimitivesT,
  overrides?: Record<string, unknown>
): System.ThemeT {
  const { primaryFontFamily, customColorScale, ...customColorTokens } = primitives
  const foundation = getFoundationColorTokens(customColorScale)
  // Assemble color tokens
  const colorTokens: Partial<ColorTokensT> = {
    ...foundation,
    ...customColorTokens,
  }
  const theme = {
    animation,
    breakpoints,
    colors: {
      ...colorTokens,
      ...getSemanticColorTokens(foundation),
    },
    lighting,
    mediaQuery,
    sizing,
    typography: primaryFontFamily ? getTypography({ primaryFontFamily }) : getTypography(),
    zIndex,
  }

  return deepMerge(theme, overrides)
}
