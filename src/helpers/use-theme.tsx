import { useContext } from "react"
import { ThemeContext } from "./lighthouse-provider"

export function createThemed() {
  return function () {
    const theme = useContext(ThemeContext)
    // const [css] = styletronUseStyletron() // it makes unwanted re-paints
    return theme
  }
}

export const useTheme = createThemed()
