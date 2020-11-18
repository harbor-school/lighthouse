import * as React from "react"
import { useTheme } from "../../../../lighthouse"
import Link from "next/link"
import { Wrap } from "./styled-components"
import * as System from "../../../../lighthouse"
import { DesktopView, MobileView } from "../../utils"
import {
  codeSandboxNewProjectWithLighthouseUrl,
  framerNewProjectWithLighthouseUrl,
  githubUrl,
  lighthouseGalleryUrl,
} from "../../constants"
import * as Asset from "../../assets"
import { mobileMenuState } from "../../store"
import { useRecoilState } from "recoil"

export function Header({ home }) {
  const theme = useTheme()
  const sharedProps = { $theme: theme, $home: home }
  const [mobileMenu, setMobileMenu] = useRecoilState(mobileMenuState)
  return (
    <Wrap {...sharedProps}>
      <System.FlexBox justifyContent="space-between" alignItems="center">
        <System.FlexItem>
          <Link href="/">
            <a>
              <System.FlexBox columnGap={theme.sizing.scale600}>
                <System.FlexItem>
                  <Symbol height={24} {...sharedProps} />
                </System.FlexItem>
                <System.FlexItem>
                  <System.ParagraphMedium color={theme.colors.contentInversePrimary}>
                    Lighthouse Design System
                  </System.ParagraphMedium>
                </System.FlexItem>
              </System.FlexBox>
            </a>
          </Link>
        </System.FlexItem>
        <System.FlexItem>
          <DesktopView>
            <System.FlexBox columnGap={theme.sizing.scale600}>
              <System.FlexItem>
                <System.FlexBox columnGap={theme.sizing.scale300} alignItems="center">
                  <System.FlexItem>
                    <a href={framerNewProjectWithLighthouseUrl} target="_blank" rel="noreferrer">
                      <System.ParagraphSmall color={theme.colors.contentInversePrimary}>
                        Start Design
                      </System.ParagraphSmall>
                    </a>
                  </System.FlexItem>
                  <System.FlexItem>
                    <Arrowupright height={18} color={theme.colors.contentInversePrimary} />
                  </System.FlexItem>
                </System.FlexBox>
              </System.FlexItem>
              <System.FlexItem>
                <System.FlexBox columnGap={theme.sizing.scale300} alignItems="center">
                  <System.FlexItem>
                    <a
                      href={codeSandboxNewProjectWithLighthouseUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <System.ParagraphSmall color={theme.colors.contentInversePrimary}>
                        Start Code
                      </System.ParagraphSmall>
                    </a>
                  </System.FlexItem>
                  <System.FlexItem>
                    <Arrowupright height={18} color={theme.colors.contentInversePrimary} />
                  </System.FlexItem>
                </System.FlexBox>
              </System.FlexItem>
              <System.FlexItem>
                <a href={lighthouseGalleryUrl} target="_blank" rel="noreferrer">
                  <System.ParagraphSmall color={theme.colors.contentInversePrimary}>
                    View All Components
                  </System.ParagraphSmall>
                </a>
              </System.FlexItem>
              <System.FlexItem>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <System.ParagraphSmall color={theme.colors.contentInversePrimary}>
                    GitHub
                  </System.ParagraphSmall>
                </a>
              </System.FlexItem>
            </System.FlexBox>
          </DesktopView>
          <MobileView>
            <System.FlexBox columnGap={theme.sizing.scale600} alignItems="center">
              <System.FlexItem>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <Asset.Github height={22} color={theme.colors.contentInversePrimary} />
                </a>
              </System.FlexItem>
              <System.FlexItem>
                <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                  }}
                >
                  <Alignright height={22} color={theme.colors.contentInversePrimary} />
                </button>
              </System.FlexItem>
            </System.FlexBox>
          </MobileView>
        </System.FlexItem>
      </System.FlexBox>
    </Wrap>
  )
}

Header.defaultProps = {}

function Symbol({ height, $theme }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height}
      style={{
        display: "block",
      }}
    >
      <path d="M 24 0 L 0 0 L 0 24 Z" fill={$theme.colors.primary}></path>
      <path d="M 0 24 L 24 0 L 24 24 Z" fill={$theme.colors.mono300}></path>
    </svg>
  )
}

function Arrowupright({ height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      height={height}
      style={{
        display: "block",
      }}
    >
      <path
        d="M 5.25 12.75 L 12.75 5.25 M 5.25 5.25 L 12.75 5.25 L 12.75 12.75"
        fill="transparent"
        strokeWidth="2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
    </svg>
  )
}

function Alignright({ height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      height={height}
      style={{
        display: "block",
      }}
    >
      <path
        d="M 19.25 9.167 L 6.417 9.167 M 19.25 5.5 L 2.75 5.5 M 19.25 12.833 L 2.75 12.833 M 19.25 16.5 L 6.417 16.5"
        fill="transparent"
        strokeWidth="2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
    </svg>
  )
}
