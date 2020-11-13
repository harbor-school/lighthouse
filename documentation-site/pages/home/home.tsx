import { motion } from "framer-motion"
import Link from "next/link"
import * as React from "react"
import * as System from "../../../../lighthouse"
import { useTheme } from "../../../../lighthouse"
import * as Asset from "../../assets"
import Layout from "../../components/layout"
import { githubUrl } from "../../constants"
import { DesktopView, isDarkTheme, MobileView, sizeBg } from "../../utils"
import { Heading } from "./styled-components"

const headingText = `Lighthouse is a continuous design system for integrating design with development workflows.\n Designing just got easier as you can directely import coded components, use the exact same layouts and measurments, and publish in no matter of time. Lighthouse Design System also provides fully customizable themes.`

export default function HomePage() {
  const theme = useTheme()
  const sharedProps = { $theme: theme }
  const secondButtonContentColor = isDarkTheme({ theme })
    ? theme.colors.contentPrimary
    : theme.colors.primary

  return (
    <Layout home>
      <Heading {...sharedProps}>
        <DesktopView>
          <System.DisplayMedium>Lighthouse Design System</System.DisplayMedium>
          <System.Spacing height="scale900" backgroundColor={sizeBg} />
          <System.ParagraphLarge>{headingText}</System.ParagraphLarge>
        </DesktopView>
        <MobileView>
          <System.DisplayXSmall
            overrides={{
              Block: {
                whiteSpace: "nowrap",
              },
            }}
          >
            Lighthouse
            <br />
            Design System
          </System.DisplayXSmall>
          <System.Spacing height="scale900" backgroundColor={sizeBg} />
          <System.ParagraphSmall>{headingText}</System.ParagraphSmall>
        </MobileView>

        <System.Spacing height="scale900" backgroundColor={sizeBg} />
        <System.FlexBox columnGap={theme.sizing.scale400}>
          <System.FlexItem>
            <Link href="/getting-started/start-design" passHref>
              <System.Button as="a">Get Started</System.Button>
            </Link>
          </System.FlexItem>
          <System.FlexItem>
            <System.Button
              kind="secondary"
              as={motion.a}
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              startEnhancer={<Asset.Github height={20} color={secondButtonContentColor} />}
              overrides={{
                BaseButton: {
                  color: secondButtonContentColor,
                  WebkitTextFillColor: secondButtonContentColor,
                },
              }}
            >
              Github
            </System.Button>
          </System.FlexItem>
        </System.FlexBox>
      </Heading>
    </Layout>
  )
}
