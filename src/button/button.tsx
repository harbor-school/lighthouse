import { motion } from "framer-motion"
import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { useHover } from "../hooks"
import { BaseButton, ButtonText, FlexWrap, StartEnhancer, EndEnhancer } from "./styled-components"
import { ButtonPropsT } from "./types"

export const Button: React.FC<ButtonPropsT> = ({
  kind = "primary",
  shape = "default",
  children,
  startEnhancer,
  endEnhancer,
  onClick,
  animate = false,
  as = motion.button,
  forwardedRef,
  overrides = {},
  ...rest
}) => {
  const theme = useContext(ThemeContext)
  const [hoverRef = forwardedRef, isHover] = useHover({
    thresholdTime: theme.animation.timing300,
  })
  const sharedProps = { $theme: theme, $kind: kind, $shape: shape }
  const motionProps = animate && {
    layout: true,
    transition: {
      duration: theme.animation.timing300,
      ease: theme.animation.easeInCurve,
      opacity: {
        duration: theme.animation.timing200,
      },
    },
  }

  return (
    <BaseButton
      ref={hoverRef}
      onClick={onClick}
      $as={animate && typeof as === "string" ? motion[as] : as}
      {...sharedProps}
      $style={overrides.BaseButton}
      {...motionProps}
      {...rest}
    >
      <FlexWrap>
        {startEnhancer && (
          <StartEnhancer
            $hide={isHover && animate}
            animate={{
              opacity: isHover && animate ? 0 : 1,
            }}
            $style={overrides.StartEnhancer}
            {...sharedProps}
            {...motionProps}
          >
            {startEnhancer}
          </StartEnhancer>
        )}
        <ButtonText $style={overrides.ButtonText} {...sharedProps} {...motionProps}>
          {children}
        </ButtonText>
        {endEnhancer && (
          <EndEnhancer
            $hide={isHover && animate}
            animate={{
              opacity: isHover && animate ? 0 : 1,
            }}
            $style={overrides.EndEnhancer}
            {...sharedProps}
            {...motionProps}
          >
            {endEnhancer}
          </EndEnhancer>
        )}
      </FlexWrap>
    </BaseButton>
  )
}
