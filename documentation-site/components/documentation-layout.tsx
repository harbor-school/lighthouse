import * as React from "react"
import { styled } from "styletron-react"
import { SideNavigation } from "./side-navigation"
import { useTheme } from "../../../lighthouse"
import { DesktopView, MobileView, Extendtable } from "../utils"
import * as System from "../../../lighthouse"
import { mobileMenuState, selectState } from "../store"
import { useRecoilState, useRecoilValue } from "recoil"
import { AnimatePresence, motion } from "framer-motion"
import { MDXProvider } from "@mdx-js/react"
import MarkdownElements from "./markdown-elements"
import Layout from "./layout"

type Props<U = Record<string, unknown>> = { $theme: System.ThemeT } & Extendtable<U>

const Grid = styled("div", ({ $theme }: Props) => {
  return {
    display: "grid",
    gridTemplateColumns: "2fr 10fr",
    [$theme.mediaQuery.large]: {
      gridTemplateColumns: "0fr 1fr",
    },
  }
})

const ColumnRight = styled("div", ({ $theme }: Props) => {
  return {
    padding: `${$theme.sizing.scale2400} 0`,
    maxWidth: "720px",
    width: "100%",
    margin: "0 auto",
    [$theme.mediaQuery.large]: {
      maxWidth: "100vw",
      padding: `${$theme.sizing.scale2400} ${$theme.sizing.scale700}`,
    },
  }
})

const Overlay = styled(motion.div, ({ $theme }: Props) => {
  return {
    boxShadow: $theme.lighting.overlay500,
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: "0px",
    zIndex: $theme.zIndex.overlay,
  }
})

const OverlayLight = styled(motion.div, ({ $theme }: Props) => {
  return {
    boxShadow: $theme.lighting.overlay200,
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: "0px",
    zIndex: $theme.zIndex.overlay,
  }
})

export function DocumentationLayout({ children }) {
  const theme = useTheme()
  const sharedProps = { $theme: theme }
  const [mobileMenu, setMobileMenu] = useRecoilState(mobileMenuState)
  const select = useRecoilValue(selectState)
  const motionProps = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: theme.animation.timing200,
        ease: theme.animation.easeInCurve,
      },
    },
    exit: {
      opacity: 0,
    },
  }

  return (
    <Layout>
      <Grid {...sharedProps}>
        <AnimatePresence>
          {mobileMenu && <Overlay {...sharedProps} {...motionProps} />}
          {select && <OverlayLight {...sharedProps} {...motionProps} />}
        </AnimatePresence>
        <DesktopView>
          <SideNavigation />
        </DesktopView>
        <MobileView>
          <System.Drawer
            placement="left"
            isOpen={mobileMenu}
            onClickOutside={() => setMobileMenu(false)}
          >
            <SideNavigation />
          </System.Drawer>
        </MobileView>
        <ColumnRight {...sharedProps}>
          <MDXProvider components={MarkdownElements}>{children}</MDXProvider>
          <System.Spacing height="scale4800" />
          {/* Footer */}
          <System.ParagraphSmall>
            © Lighthouse Design System {new Date().getFullYear()}
          </System.ParagraphSmall>
          <System.ParagraphSmall display="inline-block" marginTop="scale200">
            Created by
          </System.ParagraphSmall>
          <System.LabelSmall
            as="a"
            href="https://twitter.com/ruucm"
            target="_blank"
            color="primary"
            display="inline-block"
            marginLeft="scale100"
          >
            @ruucm
          </System.LabelSmall>
        </ColumnRight>
      </Grid>
    </Layout>
  )
}

DocumentationLayout.defaultProps = {}
