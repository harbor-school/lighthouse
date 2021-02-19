import { styled } from "styletron-react"
import { isEmpty } from "../utils/is-empty"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

/**
 * Modal
 */
export const Wrap = styled("div", ({ $theme }: Props) => {
  return {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: $theme.colors.backgroundPrimary,
    zIndex: $theme.zIndex.modal,
  }
})

export const InnerWarp = styled("div", ({ $theme }: Props) => {
  return {
    position: "relative",
    minWidth: "450px",
    maxWidth: "450px",
    minHeight: "250px",
    [$theme.mediaQuery.medium]: {
      minWidth: `calc(100vw - (${$theme.sizing.scale900} * 2))`,
      maxWidth: `calc(100vw - (${$theme.sizing.scale900} * 2))`,
    },
  }
})

export const Loading = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
})

export const ChildrenWrap = styled("div", ({ $theme }: Props) => {
  return {
    marginBottom: $theme.sizing.scale900,
  }
})

/**
 * ModalContent
 */
export const ModalHeader = styled("div", ({ $theme }: Props) => {
  return {
    padding: `0 ${$theme.sizing.scale900}`,
    margin: "0 auto",
    textAlign: "center",
  }
})

export const Title = styled("div", ({ $theme }: Props) => {
  return {
    color: $theme.colors.primary,
    padding: `${$theme.sizing.scale1200} 0`,
    ...$theme.typography.HeadingMedium,
  }
})

export const HeaderLine = styled("div", ({ $theme }: Props) => {
  return {
    height: "2px",
    background: $theme.colors.backgroundTertiary,
    marginBottom: $theme.sizing.scale900,
  }
})

export const ModalBody = styled("div", {
  padding: "0 35px",
})

export const Description = styled("div", ({ $theme }: Props) => {
  return {
    paddingBottom: $theme.sizing.scale900,
    color: $theme.colors.contentPrimary,
    ...$theme.typography.ParagraphSmall,
  }
})

export const ModalFooter = styled("div", ({ $errors }: { $errors }) => {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    ...getFooterErrorStyles($errors),
  }
})

function getFooterErrorStyles($errors) {
  if (!isEmpty($errors))
    return {
      filter: "grayscale(1)",
    }
  else return Object.freeze({})
}
