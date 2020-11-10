import { THEME } from "./constants"
import { ColorScaleTokensT, ColorTokensT, CoreSemanticColorTokensT } from "./../../../../lighthouse"

export interface ThemeDataT extends ColorScaleTokensT, ColorTokensT, CoreSemanticColorTokensT {}

export type ThemeKeyT = keyof typeof THEME

export type ThemeStateT = {
  key: ThemeKeyT
  themeData: ThemeDataT | null
}
