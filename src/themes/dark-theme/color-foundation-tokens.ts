import { ColorTokensT } from "../types"
import colorScale from "../../tokens/colors"
import { ColorScaleTokensT } from "../../lighthouse"

export default (
  // themePrimitives or foundation colors
  colors: ColorScaleTokensT = colorScale
) => {
  const core: ColorTokensT = {
    // Primary Palette
    primaryA: colors.gray1000,
    primaryB: colors.white,
    primary: colors.blue700,
    primary50: colors.blue50,
    primary100: colors.blue100,
    primary200: colors.blue200,
    primary300: colors.blue300,
    primary400: colors.blue400,
    primary500: colors.blue500,
    primary600: colors.blue600,
    primary700: colors.blue700,
    // Negative Palette
    negative: colors.red500,
    negative50: colors.red50,
    negative100: colors.red100,
    negative200: colors.red200,
    negative300: colors.red300,
    negative400: colors.red400,
    negative500: colors.red500,
    negative600: colors.red600,
    negative700: colors.red700,
    // Warning Palette
    warning: colors.yellow500,
    warning50: colors.yellow50,
    warning100: colors.yellow100,
    warning200: colors.yellow200,
    warning300: colors.yellow300,
    warning400: colors.yellow400,
    warning500: colors.yellow500,
    warning600: colors.yellow600,
    warning700: colors.yellow700,
    // Positive Palette
    positive: colors.green400,
    positive50: colors.green50,
    positive100: colors.green100,
    positive200: colors.green200,
    positive300: colors.green300,
    positive400: colors.green400,
    positive500: colors.green500,
    positive600: colors.green600,
    positive700: colors.green700,
    // Monochrome Palette
    white: colors.white,
    black: colors.black,
    mono100: colors.white,
    mono200: colors.gray50,
    mono300: colors.gray100,
    mono400: colors.gray200,
    mono500: colors.gray300,
    mono600: colors.gray400,
    mono700: colors.gray500,
    mono800: colors.gray600,
    mono900: colors.gray700,
    mono1000: colors.black,
  }
  return {
    ...core,
  }
}
