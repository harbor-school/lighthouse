import * as React from "react"
import { TypographyPropsT } from "./types"
import { handleNewline } from "../utils/handle-newline"
import * as System from "../lighthouse"

const resetStyles = { margin: "0px", padding: "0px" }

export const ParagraphXSmall: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="ParagraphXSmall"
      as="p"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const ParagraphSmall: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="ParagraphSmall"
      as="p"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const ParagraphMedium: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="ParagraphMedium"
      as="p"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const ParagraphLarge: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="ParagraphLarge"
      as="p"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const LabelXSmall: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="LabelXSmall"
      as="p"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const LabelSmall: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="LabelSmall"
      as="p"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const LabelMedium: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="LabelMedium"
      as="p"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const LabelLarge: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="LabelLarge"
      as="p"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const HeadingXSmall: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="HeadingXSmall"
      as="h6"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const HeadingSmall: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="HeadingSmall"
      as="h5"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const HeadingMedium: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="HeadingMedium"
      as="h4"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const HeadingLarge: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="HeadingLarge"
      as="h3"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const HeadingXLarge: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="HeadingXLarge"
      as="h2"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const HeadingXXLarge: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="HeadingXXLarge"
      as="h1"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const DisplayXSmall: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="DisplayXSmall"
      as="p"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const DisplaySmall: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="DisplaySmall"
      as="p"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const DisplayMedium: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="DisplayMedium"
      as="p"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export const DisplayLarge: React.FC<TypographyPropsT> = React.forwardRef(function Comp(
  props: TypographyPropsT,
  ref: any
) {
  return (
    <System.Block
      font="DisplayLarge"
      as="p"
      color="contentPrimary"
      forwardedRef={ref}
      {...resetStyles}
      {...props}
    >
      {handleNewline(props.children)}
    </System.Block>
  )
})

export * from "./types"
