import * as React from "react"
import { SideNavigation } from "../side-navigation"
import { useTheme } from "../../../../lighthouse"
import { DesktopView, MobileView } from "../../utils"
import * as System from "../../../../lighthouse"
import { mobileMenuState, selectState } from "../../store"
import { useRecoilState, useRecoilValue } from "recoil"
import { AnimatePresence } from "framer-motion"
import { MDXProvider } from "@mdx-js/react"
import MarkdownElements from "../markdown-elements"
import Layout from "../layout"
import { Grid, Overlay, OverlayLight, ColumnRight } from "./styled-components"

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
