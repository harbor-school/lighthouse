import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { useHover } from "../hooks"
import { LabelText, TitleText, Wrap } from "./styled-components"
import { CardPropsT } from "./types"

export const Card: React.FC<CardPropsT> = ({
  children,
  label,
  title,
  onClick = () => void 0,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const [hoverRef, isHover] = useHover({})
  const sharedProps = { $theme: theme }
  const motionProps = {
    variants: {
      active: {
        x: -5,
        y: -5,
        boxShadow: theme.lighting.shadow700,
      },
      normal: {
        x: 0,
        y: 0,
        boxShadow: theme.lighting.shadow700.replace(/10px/g, "0px"),
      },
    },
    animate: isHover ? "active" : "normal",
    transition: {
      duration: theme.animation.timing200,
      ease: theme.animation.easeInCurve,
    },
  }

  return (
    <Wrap
      onClick={onClick}
      $style={overrides.Wrap}
      {...sharedProps}
      {...motionProps}
      ref={hoverRef}
    >
      {label && <LabelText {...sharedProps}>{label}</LabelText>}
      <TitleText {...sharedProps}>{title}</TitleText>
      {children}
    </Wrap>
  )
}

Card.defaultProps = {
  label: "LABEL",
  title: "Example card",
}
