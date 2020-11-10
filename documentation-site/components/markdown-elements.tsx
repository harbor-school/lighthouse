import Link from "next/link"
import Highlight, { defaultProps } from "prism-react-renderer"
import prismThemeLight from "prism-react-renderer/themes/nightOwlLight"
import prismThemeDark from "prism-react-renderer/themes/nightOwl"
import * as React from "react"
import { styled } from "styletron-react"
import * as System from "../../../lighthouse"
import { useTheme } from "../../../lighthouse"
import { Extendtable, isDarkMode, sizeBg } from "../utils"
import { NextSeo } from "next-seo"
import { siteBaseUrl } from "../constants"
import { useRouter } from "next/router"

type Props<U = Record<string, unknown>> = { $theme: System.ThemeT } & Extendtable<U>

export const H1 = ({ children }) => {
  const pageTitle = `${process.env.NODE_ENV !== "production" ? "[DEV] " : ""}
  Lighthouse - ${children}`
  const router = useRouter()
  const pageUrl = siteBaseUrl + router.pathname

  return (
    <>
      <NextSeo
        title={pageTitle}
        canonical={pageUrl}
        openGraph={{
          title: pageTitle,
          url: pageUrl,
        }}
      />
      <System.HeadingLarge>{children}</System.HeadingLarge>
    </>
  )
}

export const H2 = ({ children }) => (
  <>
    <System.Spacing height="scale1600" backgroundColor={sizeBg} />
    <System.HeadingSmall>{children}</System.HeadingSmall>
    <System.Spacing height="scale900" backgroundColor={sizeBg} />
  </>
)
export const H3 = ({ children }) => (
  <>
    <System.Spacing height="scale1200" backgroundColor={sizeBg} />
    <System.HeadingXSmall>{children}</System.HeadingXSmall>
    <System.Spacing height="scale900" backgroundColor={sizeBg} />
  </>
)
export const Paragraph = ({ children }) => (
  <>
    <System.ParagraphLarge>{children}</System.ParagraphLarge>
  </>
)

export const Pre = styled("pre", ({ $theme }: Props) => {
  return {
    textAlign: "left",
    margin: "1em 0",
    padding: `${$theme.sizing.scale600} ${$theme.sizing.scale700}`,
    overflow: "scroll",
    fontFamily: '"Roboto Mono", monospace',
    fontSize: "0.85em",
  }
})

export const TokenLine = styled("div", {})

const Code = ({ children, className }) => {
  const theme = useTheme()
  const sharedProps = { $theme: theme }
  const language = className.replace(/language-/, "")
  const codeString = children.replace(/[\r\n]+$/, "")
  return (
    <System.ParagraphLarge as="div">
      <Highlight
        {...defaultProps}
        theme={isDarkMode() ? prismThemeDark : prismThemeLight}
        code={codeString}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style} {...sharedProps}>
            {tokens.map((line, i) => (
              <TokenLine key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </TokenLine>
            ))}
          </Pre>
        )}
      </Highlight>
    </System.ParagraphLarge>
  )
}

export const DocLink = ({ children, href }) => {
  const theme = useTheme()
  const parts = href.split("#")
  return (
    <Link href={href} passHref>
      <System.ParagraphMedium
        as="a"
        target="_blank"
        display="inline-block"
        overrides={{
          Block: {
            background: theme.colors.backgroundTertiary,
          },
        }}
      >
        {children}
      </System.ParagraphMedium>
    </Link>
  )
}

export default {
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  p: Paragraph,
  a: DocLink,
}
