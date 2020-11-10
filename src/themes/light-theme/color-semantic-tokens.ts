import { ColorTokensT, CoreSemanticColorTokensT } from "../types"
import getFoundationColorTokens from "./color-foundation-tokens"
import colors from "../../tokens/colors"

export default (
  // themePrimitives or foundation colors
  foundation: ColorTokensT = getFoundationColorTokens()
) => {
  const core: CoreSemanticColorTokensT = {
    // Background
    backgroundPrimary: foundation.primaryB,
    backgroundSecondary: colors.gray50,
    backgroundTertiary: colors.gray100,
    backgroundInversePrimary: foundation.primaryA,
    backgroundInverseSecondary: colors.gray600,

    // Content
    contentPrimary: foundation.black,
    contentSecondary: colors.gray600,
    contentTertiary: colors.gray300,
    contentInversePrimary: foundation.white,
    contentInverseSecondary: colors.gray300,
    contentInverseTertiary: colors.gray400,
  }
  return {
    ...core,
  }
}
