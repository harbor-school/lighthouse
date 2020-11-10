import { ThemeStateT } from "./types"
import { LightTheme, DarkTheme } from "../../../../lighthouse"
import { generateCustomTheme } from "./withHOC"

export function getThemeByKey({ key, themeData }: ThemeStateT) {
  switch (key) {
    case "light":
      return LightTheme
    case "dark":
      return DarkTheme
    case "custom":
      return generateCustomTheme({ themeData })
    default:
      return LightTheme
  }
}
