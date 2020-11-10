import * as React from "react"
import { Header } from "./header"
import * as System from "../../../lighthouse"

export default function Layout({ children, home }) {
  return (
    <System.Block backgroundColor="backgroundPrimary" minHeight="100vh">
      <Header home={home} />
      <main>{children}</main>
    </System.Block>
  )
}

Layout.defaultProps = {
  home: false,
}
