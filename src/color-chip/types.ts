import { ColorTokensT } from "./../tokens/types"
import { ColorTokensT as ColorFoundationTokensT, CoreSemanticColorTokensT } from "./../themes/types"
import { KIND } from "./constants"

export type ColorChipPropsT = {
  showInfo?: boolean
  kind?: keyof typeof KIND
  colorScale?: keyof ColorTokensT
  colorFoundation?: keyof ColorFoundationTokensT
  colorSemantic?: keyof CoreSemanticColorTokensT
}
