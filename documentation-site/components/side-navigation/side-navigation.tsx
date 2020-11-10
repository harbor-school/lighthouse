import Link from "next/link"
import { useRouter } from "next/router"
import * as React from "react"
import { useSetRecoilState } from "recoil"
import * as System from "../../../../lighthouse"
import { useTheme } from "../../../../lighthouse"
import { TARGE_FILE_LIST } from "../../constants"
import { mobileMenuState } from "../../store"
import { capitalize, fileNameToComponentName, sizeBg } from "../../utils"
import { MenuItem, Wrap } from "./styled-components"

export function SideNavigation() {
  const theme = useTheme()
  const sharedProps = { $theme: theme }
  const setMobileMenu = useSetRecoilState(mobileMenuState)

  return (
    <Wrap onClick={() => setMobileMenu(false)} {...sharedProps}>
      <System.Spacing height="scale900" backgroundColor={sizeBg} />
      <System.Block>
        <System.ListItem>
          <System.ListItemLabel>Getting Started</System.ListItemLabel>
        </System.ListItem>
        <LinkItem $key="/getting-started/background/" $text="Background" />
        <LinkItem $key="/getting-started/start-design/" $text="Start Design" />
        <LinkItem $key="/getting-started/start-code/" $text="Start Code" />
        <LinkItem $key="/getting-started/lighthouse-gallery/" $text="Lighthouse Gallery" />
      </System.Block>
      <System.Spacing height="scale800" backgroundColor={sizeBg} />
      <System.Block>
        <System.ListItem>
          <System.ListItemLabel>Theme</System.ListItemLabel>
        </System.ListItem>
        <LinkItem $key="/theme/theming/" $text="Theming" />
        <LinkItem $key="/theme/theme-generator/" $text="Theme Generator" />
        <LinkItem $key="/theme/use-theme/" $text="useTheme" />
      </System.Block>

      {Object.keys(TARGE_FILE_LIST).map((kind, id) => (
        <div key={id}>
          <System.Spacing height="scale800" backgroundColor={sizeBg} />
          <System.Block>
            <System.ListItem>
              <System.ListItemLabel>{capitalize(kind)}</System.ListItemLabel>
            </System.ListItem>
            {TARGE_FILE_LIST[kind].map((fileName, id) => (
              <div key={id}>
                <LinkItem
                  $key={`/components/${fileName}/`}
                  $text={fileNameToComponentName(fileName)}
                />
              </div>
            ))}
          </System.Block>
        </div>
      ))}
      <System.Spacing height="scale800" backgroundColor={sizeBg} />
      <System.Block>
        <System.ListItem>
          <System.ListItemLabel>Examples</System.ListItemLabel>
        </System.ListItem>
        <LinkItem $key="/examples/with-cra/" $text="Create React App" />
        <LinkItem $key="/examples/with-gatsby/" $text="Gatsby" />
        <LinkItem $key="/examples/with-nextjs/" $text="Next.js" />
      </System.Block>
      <System.Spacing height="scale2400" backgroundColor={sizeBg} />
    </Wrap>
  )
}

SideNavigation.defaultProps = {}

function LinkItem({ $key, $text }) {
  const router = useRouter()
  const theme = useTheme()
  const sharedProps = { $theme: theme }
  return (
    <Link href={$key} passHref>
      <MenuItem
        {...getMotionProps({
          $theme: theme,
          $currentPath: router.asPath,
          $key,
        })}
        {...sharedProps}
      >
        {$text}
      </MenuItem>
    </Link>
  )
}

function getMotionProps({ $theme, $currentPath, $key }) {
  const shared = {
    transition: {
      ease: $theme.animation.easeInCurve,
      duration: $theme.animation.timing200,
    },
  }
  if ($currentPath === $key)
    return {
      animate: {
        background: $theme.colors.backgroundSecondaryAccent,
      },
      ...shared,
    }
  else
    return {
      animate: {
        background: $theme.colors.backgroundSecondary,
      },
      ...shared,
    }
}
