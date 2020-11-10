import { isDarkMode } from "./../utils/utils"
import { atom } from "recoil"
import { colors } from "../../../lighthouse"
import * as lightThemeData from "./light-theme.json"
import * as darkThemeData from "./dark-theme.json"

export const mobileMenuState = atom({
  key: "mobileMenu",
  default: false,
})

export const themeEditorState = atom({
  key: "themeGenerator",
  default: isDarkMode() ? darkThemeData["default"] : lightThemeData["default"],
})

export const selectState = atom({
  key: "select",
  default: false,
})
