import { motion } from "framer-motion"
import { FieldError } from "react-hook-form"
import { styled } from "styletron-react"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const LableWrap = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
})

export const LabelText = styled(
  "div",
  ({ $theme, $error }: Props<{ $error: FieldError | undefined }>) => {
    return {
      color: $error ? $theme.colors.negative : $theme.colors.contentSecondary,
      ...$theme.typography.ParagraphSmall,
    }
  }
)

export const Caption = styled(
  "div",
  ({ $theme, $error }: Props<{ $error: FieldError | undefined }>) => {
    return {
      color: $error ? $theme.colors.negative : $theme.colors.contentSecondary,
      ...$theme.typography.ParagraphSmall,
    }
  }
)

export const BaseInput = styled("input", ({ $theme }: Props) => {
  return {
    // remove input styles
    appearance: "none",
    border: "none",
    borderRadius: "unset",
    margin: "unset",
    outline: "unset",
    boxSizing: "border-box",
    // start new styles
    width: "100%",
    padding: `${$theme.sizing.scale600} ${$theme.sizing.scale700}`,
    display: "inline-block",
    verticalAlign: "middle",
    boxShadow: `inset 0px 0px 0px 1px ${$theme.colors.backgroundTertiary}`, // inside border
    background: $theme.colors.backgroundSecondary,
    color: $theme.colors.contentPrimary,
    ...$theme.typography.ParagraphMedium,
    ":focus": {
      outline: "none",
    },
  }
})

export const InputWrapper = styled(
  "div",
  ({ $theme, $haveMargin }: Props<{ $haveMargin: string | undefined }>) => {
    return {
      position: "relative",
      marginTop: $haveMargin ? $theme.sizing.scale600 : "0px",
      overflow: "hidden",
    }
  }
)

export const Wrap = styled("div", {})

export const FocusBar = styled(
  motion.div,
  ({ $theme, $error }: Props<{ $error: FieldError | undefined }>) => {
    return {
      position: "absolute",
      height: "100%",
      width: "5px",
      background: $error ? $theme.colors.negative : $theme.colors.primary,
    }
  }
)

export const StyledInput = styled("input", {
  display: "none",
})
