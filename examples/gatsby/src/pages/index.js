import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import * as System from "@harborschool/lighthouse"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <System.HeadingLarge>Hi people</System.HeadingLarge>
    <System.ParagraphMedium>Welcome to your new Gatsby site.</System.ParagraphMedium>
    <System.ParagraphMedium>Now go build something great.</System.ParagraphMedium>
    <System.Block maxWidth="300px" marginBottom="1.45rem">
      <Image />
    </System.Block>
    <System.Button onClick={() => navigate("/page-2/")}>Go to page 2</System.Button>
    <System.Button kind="secondary" onClick={() => navigate("/using-typescript/")}>
      Go to "Using TypeScript"
    </System.Button>
  </Layout>
)

export default IndexPage
