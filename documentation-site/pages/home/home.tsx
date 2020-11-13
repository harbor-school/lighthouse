import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Link from "next/link";
import * as React from "react";
import * as System from "../../../../lighthouse";
import { useTheme } from "../../../../lighthouse";
import * as Asset from "../../assets";
import Layout from "../../components/layout";
import { githubUrl } from "../../constants";
import { DesktopView, MobileView, sizeBg } from "../../utils";
import { Heading } from "./styled-components";

const headingText = `Lighthouse is a continuous design system for the design and development workflows. You can design with real components and develop in the same way using the power of Framer.

Lighthouse Design System also provides fully customizable theme.`;

export default function HomePage() {
  const theme = useTheme();
  const sharedProps = { $theme: theme };
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
              startEnhancer={<Asset.Github height={20} color={theme.colors.primary} />}
              overrides={{
                BaseButton: {
                  color: theme.colors.primary,
                  WebkitTextFillColor: theme.colors.primary,
                },
              }}
            >
              Github
            </System.Button>
          </System.FlexItem>
        </System.FlexBox>
      </Heading>
    </Layout>
  );
}
