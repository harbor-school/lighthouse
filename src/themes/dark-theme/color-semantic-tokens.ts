import { ColorTokensT, CoreSemanticColorTokensT } from "../types"
import getFoundationColorTokens from "./color-foundation-tokens"
import colors from "../../tokens/colors"

export default (
  // themePrimitives or foundation colors
  foundation: ColorTokensT = getFoundationColorTokens()
) => {
  const core: CoreSemanticColorTokensT = {
    // Background
    backgroundPrimary: colors.gray900,
    backgroundSecondary: colors.gray800,
    backgroundTertiary: colors.gray700,
    backgroundInversePrimary: colors.gray1000,
    backgroundInverseSecondary: colors.gray600,

    // Content
    contentPrimary: colors.white,
    contentSecondary: colors.gray300,
    contentTertiary: colors.gray600,
    contentInversePrimary: foundation.white,
    contentInverseSecondary: colors.gray300,
    contentInverseTertiary: colors.gray400,
  }

  return {
    ...core,
  }
}
