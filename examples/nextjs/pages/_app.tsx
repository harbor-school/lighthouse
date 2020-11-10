import * as React from "react"
import App from "next/app"
import { Provider as StyletronProvider } from "styletron-react"
import { styletron, debug } from "../styletron"
import { LighthouseProvider, LightTheme } from "@harborschool/lighthouse"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <LighthouseProvider theme={LightTheme}>
          <Component {...pageProps} />
        </LighthouseProvider>
      </StyletronProvider>
    )
  }
}
