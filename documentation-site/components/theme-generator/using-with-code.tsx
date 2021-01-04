import * as React from "react"
import * as System from "../../../../lighthouse"
import { useTheme } from "../../../../lighthouse"
import { themeEditorState } from "../../store"
import { useRecoilState } from "recoil"
import Highlight, { defaultProps } from "prism-react-renderer"
import prismThemeLight from "prism-react-renderer/themes/nightOwlLight"
import prismThemeDark from "prism-react-renderer/themes/nightOwl"
import { Pre } from "../../components/markdown-elements"
import { useClipboard } from "../../hooks"
import { isDarkTheme } from "../../utils"

export function UsingWithCode() {
  const theme = useTheme()
  const sharedProps = { $theme: theme }
  const [themeEditor, setthemeEditor] = useRecoilState(themeEditorState)
  const themeString = JSON.stringify(themeEditor, null, 2)
  const baseCodeString = `import App from "next/app"
import { Provider as StyletronProvider } from "styletron-react"
import { styletron, debug } from "../styletron"
import { createTheme, LighthouseProvider } from "@harborschool/lighthouse"
import * as output from './my-theme.json'


export default class MyApp extends App {
  render() {
    const typography = {
      primaryFontFamily: 'system-ui, Helvetica, Arial, sans-serif',
    }
    const customTheme = generateCustomTheme({
      tokens: output['default'], // Add imported tokens
      typography, // Add your custom font
    })

    const { Component, pageProps } = this.props
    return (
      <StyletronProvider value={styletron} debug={debug}>
        <LighthouseProvider theme={customTheme}>
          <Component {...pageProps} />
        </LighthouseProvider>
      </StyletronProvider>
    )
  }
}

let colors, foundation, semantic, newSemantic // declare outsite to share variable to eval()

export function generateCustomTheme({ tokens, typography }) {
  if (tokens) {
    // Custom Color Scale
    colors = tokens.colors.colorScale
    // Foundational Colors
    foundation = trimStringValues(tokens.colors.colorFoundation)
    // Semantic Colors
    semantic = trimStringValues(tokens.colors.colorSemantic)
    // New Semantic Colors
    newSemantic = tokens.colors.newColorSemantic

    const primitives = {
      ...newSemantic,
      ...typography,
    }
    const overrides = {
      colors: {
        ...foundation,
        ...semantic,
      },
      lighting: {
        ...tokens.lighting,
      },
      sizings: {},
      breakpoints: {},
      zIndex: {},
    }
    const customTheme = createTheme(primitives, overrides)
    return customTheme
  }
}
function trimStringValues(obj) {
  Object.keys(obj).forEach(
    (key) => (obj[key] = isHex(obj[key]) ? obj[key] : eval(obj[key]))
  )
  return obj
}
function isHex(value) {
  return /^#[0-9A-F]{6}$/i.test(value)
}
`
  const { hasCopied: baseCodeStringHasCopied, onCopy: baseCodeStringOnCopy } = useClipboard(
    baseCodeString
  )

  return (
    <System.Block position="relative" font="ParagraphLarge">
      <Highlight
        {...defaultProps}
        theme={isDarkTheme({ theme }) ? prismThemeDark : prismThemeLight}
        code={baseCodeString}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style} {...sharedProps}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
      <System.Button
        kind="secondary"
        onClick={baseCodeStringOnCopy}
        overrides={{
          BaseButton: {
            position: "absolute",
            top: "0px",
            right: "0px",
            ...getCopiedStyle({ theme, hasCopied: baseCodeStringHasCopied }),
          },
        }}
      >
        {baseCodeStringHasCopied ? "Copied!" : "Copy Code (_app.tsx)"}
      </System.Button>
    </System.Block>
  )
}

function getCopiedStyle({ theme, hasCopied }) {
  if (hasCopied) {
    return {
      color: theme.colors.primary,
      WebkitTextFillColor: theme.colors.primary,
    }
  }
}
