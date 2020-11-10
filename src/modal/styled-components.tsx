import { styled } from "styletron-react"
import { isEmpty } from "../utils/is-empty"
import { ThemeT } from "../themes"
import { Extendtable } from "../utils/extendable"

type Props<U = Record<string, unknown>> = { $theme: ThemeT } & Extendtable<U>

export const Wrap = styled("div", ({ $theme }: Props) => {
  return {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "450px",
    minHeight: "278px", // 450/1.618 px
    background: $theme.colors.backgroundPrimary,
    zIndex: $theme.zIndex.modal,

    [$theme.mediaQuery.medium]: {
      width: `calc(100% - (${$theme.sizing.scale900} * 2))`,
    },
  }
})

export const ModalBoxInner = styled("div", {
  position: "relative",
})

export const ModalWrap = styled("div", {})

export const ModalBody = styled("div", {
  padding: "0 35px",
})

export const ModalHeader = styled("div", ({ $theme }: Props) => {
  return {
    padding: `0 ${$theme.sizing.scale900}`,
    margin: "0 auto",
    textAlign: "center",
  }
})

export const HeaderLine = styled("div", ({ $theme }: Props) => {
  return {
    height: "2px",
    background: $theme.colors.backgroundTertiary,
    marginBottom: $theme.sizing.scale900,
  }
})

export const ModalFooter = styled("div", ({ $errors }: { $errors }) => {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    ...getFooterErrorStyles($errors),
  }
})

export const Title = styled("div", ({ $theme }: Props) => {
  return {
    color: $theme.colors.primary,
    padding: `${$theme.sizing.scale1200} 0`,
    ...$theme.typography.HeadingMedium,
  }
})

export const Description = styled("div", ({ $theme }: Props) => {
  return {
    paddingBottom: $theme.sizing.scale900,
    color: $theme.colors.contentPrimary,
    ...$theme.typography.ParagraphSmall,
  }
})

export const ModalBox = styled("div", {})

export const MemberTtitle = styled("div", {
  paddingBottom: "10px",
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

function getFooterErrorStyles($errors) {
  if (!isEmpty($errors))
    return {
      filter: "grayscale(1)",
    }
  else return Object.freeze({})
}
