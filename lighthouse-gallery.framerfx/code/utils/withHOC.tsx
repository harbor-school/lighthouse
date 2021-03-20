import * as React from "react"
import { addListener } from "./ThemeManagement"
import { Provider as StyletronProvider } from "styletron-react"
import { LighthouseProvider, LightTheme, DarkTheme, createTheme } from "../../../../lighthouse"
import { engine } from "./StyletronEngine"

import "./fonts.css"
import { ThemeStateT } from "./types"

export function withHOC(Component): React.FC<any> {
  return (props) => {
    const [currentTheme, setCurrentTheme] = React.useState<ThemeStateT>({
      key: "light",
    })

    React.useEffect(() => {
      const unsubscribe = addListener((theme: ThemeStateT) => {
        setCurrentTheme(theme)
      })
      return unsubscribe
    }, [])

    return (
      <ThemeProvider
        theme={!props.theme || props.theme === "" ? currentTheme.key : props.theme}
        themeData={currentTheme.themeData}
      >
        <Component {...props} />
      </ThemeProvider>
    )
  }
}

/**
 * ThemeProvider
 */
const ThemeProvider = ({ theme, themeData, children }) => {
  const themes = {
    light: LightTheme,
    dark: DarkTheme,
    custom: generateCustomTheme({ themeData }),
  }

  return (
    <StyletronProvider value={engine}>
      <LighthouseProvider theme={themes[theme] || themes.light}>{children}</LighthouseProvider>
    </StyletronProvider>
  )
}

let colors, foundation, semantic, newSemantic // declare outsite to share variable to eval()
export function generateCustomTheme({ themeData }) {
  if (themeData) {
    const myTheme = themeData
    // Custom Color Scale
    colors = myTheme.colors.colorScale
    // Foundational Colors
    foundation = trimStringValues(myTheme.colors.colorFoundation)
    // Semantic Colors
    semantic = trimStringValues(myTheme.colors.colorSemantic)
    // New Semantic Colors
    newSemantic = myTheme.colors.newColorSemantic

    const primitives = {
      customColorScale: colors,
      ...newSemantic,
    }
    const overrides = {
      colors: {
        ...foundation,
        ...semantic,
      },
      lighting: {
        ...myTheme.lighting,
      },
    }
    const customTheme = createTheme(primitives, overrides)
    return customTheme
  }
}

function trimStringValues(obj) {
  Object.keys(obj).forEach((key) => (obj[key] = isHex(obj[key]) ? obj[key] : eval(obj[key])))
  return obj
}

function isHex(value) {
  return /^#[0-9A-F]{6}$/i.test(value)
}
