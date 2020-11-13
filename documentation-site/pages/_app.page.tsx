/* eslint-disable react/react-in-jsx-scope */
import "../styles/global.css"

import App from "next/app"
import { Provider as StyletronProvider } from "styletron-react"
import { styletron, debug } from "../styletron"
import {
  createTheme,
  LighthouseProvider,
  LightTheme,
  colorLuminanceByNumber,
} from "../../../lighthouse"
import SEO from "../next-seo.config"
import Head from "next/head"
import { DefaultSeo } from "next-seo"
import { RecoilRoot, useRecoilState } from "recoil"
import { themeEditorState } from "../store"
import * as darkThemeData from "../store/dark-theme.json"
import * as lightThemeData from "../store/light-theme.json"
import { getColorfromString, isClient } from "../utils"
import { useState, useEffect } from "react"

function StyledApp(props) {
  const { Component, pageProps } = props
  // const themeEditor = useRecoilValue(themeEditorState)
  const [themeEditor, setThemeEditor] = useRecoilState(themeEditorState)
  const primitives = {
    customColorScale: themeEditor.colors.colorScale,
    // light-theme
    backgroundPrimaryAccent: colorLuminanceByNumber(LightTheme.colors.backgroundSecondary, 2),
    backgroundSecondaryAccent: colorLuminanceByNumber(LightTheme.colors.backgroundSecondary, -10),
    ...generateColorProperties({ themeEditor, kind: "newColorSemantic" }),
  }
  const overrides = {
    zIndex: {
      select: 100,
      header: 150,
    },
    colors: {
      ...generateColorProperties({ themeEditor, kind: "colorFoundation" }),
      ...generateColorProperties({ themeEditor, kind: "colorSemantic" }),
    },
    lighting: {
      ...themeEditor.lighting,
    },
  }
  const appTheme = createTheme(primitives, overrides)

  // Detect prefers-color and change Site Theme
  if (isClient && window.matchMedia("(prefers-color-scheme: dark)").addEventListener)
    // Safari (Mac) doesn't have addEventListener yet. https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      const newColorScheme = e.matches ? "dark" : "light"
      if (newColorScheme === "dark") setThemeEditor(darkThemeData["default"])
      else setThemeEditor(lightThemeData["default"])
    })

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const body = (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <LighthouseProvider theme={appTheme}>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta content="/static/favicons/browserconfig.xml" name="msapplication-config" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </LighthouseProvider>
    </StyletronProvider>
  )
  // prevents ssr flash for mismatched dark mode
  if (!mounted) return <div style={{ visibility: "hidden" }}>{body}</div>
  return body
}

export default class MyApp extends App {
  render() {
    return (
      <RecoilRoot>
        <StyledApp {...this.props} />
      </RecoilRoot>
    )
  }
}

function generateColorProperties({ themeEditor, kind }) {
  const result = {}
  const data = themeEditor.colors[kind]
  for (const key in data) {
    if (data.hasOwnProperty(key)) result[key] = getColorfromString(data[key], themeEditor)
  }
  return result
}
