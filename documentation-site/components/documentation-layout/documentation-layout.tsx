import * as React from "react"
import { SideNavigation } from "../side-navigation"
import { useTheme } from "../../../../lighthouse"
import { DesktopView, isDarkTheme, MobileView } from "../../utils"
import * as System from "../../../../lighthouse"
import { mobileMenuState, selectState, themeEditorState } from "../../store"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { AnimatePresence } from "framer-motion"
import { MDXProvider } from "@mdx-js/react"
import MarkdownElements from "../markdown-elements"
import Layout from "../layout"
import { Grid, Overlay, OverlayLight, ColumnRight, ThemeToggle } from "./styled-components"
import * as lightThemeData from "../../store/light-theme.json"
import * as darkThemeData from "../../store/dark-theme.json"

export function DocumentationLayout({ children }) {
  const theme = useTheme()
  const sharedProps = { $theme: theme }
  const [mobileMenu, setMobileMenu] = useRecoilState(mobileMenuState)
  const select = useRecoilValue(selectState)
  const setThemeEditor = useSetRecoilState(themeEditorState)
  const $isDarkTheme = isDarkTheme({ theme })
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
      <ThemeToggle
        onClick={() =>
          setThemeEditor($isDarkTheme ? lightThemeData["default"] : darkThemeData["default"])
        }
        initial={{
          rotate: $isDarkTheme ? 0 : 180,
        }}
        animate={{
          rotate: $isDarkTheme ? 0 : 180,
        }}
        transition={{
          ease: theme.animation.easeInCurve,
          duration: theme.animation.timing300,
        }}
        {...sharedProps}
      >
        <System.Icon viewBox="0 0 24 24" width="100%">
          <path d="M 24 0 L 0 0 L 0 24 Z" fill={theme.colors.primary}></path>
          <path d="M 0 24 L 24 0 L 24 24 Z" fill={theme.colors.mono300}></path>
        </System.Icon>
      </ThemeToggle>
    </Layout>
  )
}

DocumentationLayout.defaultProps = {}
