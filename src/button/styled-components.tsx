import { styled } from "styletron-react"
import { BUTTON_KIND, BUTTON_SHAPE } from "./constants"
import { motion } from "framer-motion"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const BaseButton = styled(
  motion.button,
  ({
    $theme,
    $kind,
    $shape,
  }: Props<{
    $kind: keyof typeof BUTTON_KIND
    $shape: keyof typeof BUTTON_SHAPE
  }>) => {
    return {
      // remove button styles
      fontSize: "unset",
      fontFamily: "unset",
      borderStyle: "unset",
      margin: "unset",
      outline: "unset",
      boxSizing: "border-box",
      lineHeight: "unset",
      // start new styles
      cursor: "pointer",
      display: "inline-block",
      ...getKindStyles({ $theme, $kind }),
      ...getPaddingStyles({ $theme, $shape }),
      ...getBorderRadiusStyles({ $shape }),
    }
  }
)
export const FlexWrap = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
})

export const StartEnhancer = styled(motion.div, ({ $theme, $hide }: Props<{ $hide: boolean }>) => {
  if ($hide)
    return {
      /* to remove width */
      position: "absolute",
      left: "0px",
      /* safari fix */
      display: "flex",
      alignItems: "center",
    }
  else
    return {
      marginRight: $theme.sizing.scale300,
    }
})

export const EndEnhancer = styled(motion.div, ({ $theme, $hide }: Props<{ $hide: boolean }>) => {
  if ($hide)
    return {
      /* to remove width */
      position: "absolute",
      left: "0px",
      /* safari fix */
      display: "flex",
      alignItems: "center",
    }
  else
    return {
      marginLeft: $theme.sizing.scale300,
    }
})

export const ButtonText = styled(motion.div, ({ $theme }: Props) => {
  return {
    whiteSpace: "nowrap",
    ...$theme.typography.LabelMedium,
  }
})

function getKindStyles({ $theme, $kind }) {
  switch ($kind) {
    case BUTTON_KIND.primary:
      return {
        color: $theme.colors.contentInversePrimary,
        WebkitTextFillColor: $theme.colors.contentInversePrimary,
        backgroundColor: $theme.colors.primary,
        ":active": {
          backgroundColor: $theme.colors.buttonPrimaryActive,
        },
      }
    case BUTTON_KIND.secondary:
      return {
        color: $theme.colors.contentSecondary,
        WebkitTextFillColor: $theme.colors.contentSecondary,
        backgroundColor: $theme.colors.backgroundTertiary,
        ":active": {
          backgroundColor: $theme.colors.buttonSecondaryActive,
        },
      }
    case BUTTON_KIND.tertiary:
      return {
        color: $theme.colors.primary,
        WebkitTextFillColor: $theme.colors.primary,
        backgroundColor: "transparent",
      }
    default:
      return Object.freeze({})
  }
}

export function getBorderRadiusStyles({ $shape }) {
  let value = 0
  if ($shape === BUTTON_SHAPE.pill || $shape === BUTTON_SHAPE.circle) value = 1000 // a large amount of radius
  return {
    borderTopRightRadius: value + "px",
    borderBottomRightRadius: value + "px",
    borderTopLeftRadius: value + "px",
    borderBottomLeftRadius: value + "px",
  }
}

function getPaddingStyles({ $theme, $shape }) {
  switch ($shape) {
    case BUTTON_SHAPE.circle:
      return {
        paddingTop: $theme.sizing.scale400,
        paddingBottom: $theme.sizing.scale400,
        paddingLeft: $theme.sizing.scale400,
        paddingRight: $theme.sizing.scale400,
      }
    default:
      return {
        paddingTop: $theme.sizing.scale400,
        paddingBottom: $theme.sizing.scale400,
        paddingLeft: $theme.sizing.scale700,
        paddingRight: $theme.sizing.scale700,
      }
  }
}
