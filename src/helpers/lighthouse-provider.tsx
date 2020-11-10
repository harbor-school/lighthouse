import * as React from "react"
import { LightTheme, ThemeT } from "../themes"

export const ThemeContext = React.createContext<ThemeT>(LightTheme)

// Provider in your app
export const LighthouseProvider = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
)

export default LighthouseProvider
