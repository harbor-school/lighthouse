type Globals = "-moz-initial" | "inherit" | "initial" | "revert" | "unset"

export type ColorTokensT = {
  // Primary Palette
  primaryA: string
  primaryB: string
  primary: string
  primary50: string
  primary100: string
  primary200: string
  primary300: string
  primary400: string
  primary500: string
  primary600: string
  primary700: string

  // Alert Palette
  negative: string
  negative50: string
  negative100: string
  negative200: string
  negative300: string
  negative400: string
  negative500: string
  negative600: string
  negative700: string

  // Warning Palette
  warning: string
  warning50: string
  warning100: string
  warning200: string
  warning300: string
  warning400: string
  warning500: string
  warning600: string
  warning700: string

  // Success Palette
  positive: string
  positive50: string
  positive100: string
  positive200: string
  positive300: string
  positive400: string
  positive500: string
  positive600: string
  positive700: string

  // Monochrome Palette
  white: string
  black: string
  mono100: string
  mono200: string
  mono300: string
  mono400: string
  mono500: string
  mono600: string
  mono700: string
  mono800: string
  mono900: string
  mono1000: string
}

export type CoreSemanticColorTokensT = {
  // Background
  backgroundPrimary: string
  backgroundSecondary: string
  backgroundTertiary: string
  backgroundInversePrimary: string
  backgroundInverseSecondary: string

  // Content
  contentPrimary: string
  contentSecondary: string
  contentTertiary: string
  contentInversePrimary: string
  contentInverseSecondary: string
  contentInverseTertiary: string
}

export interface ColorsT extends ColorTokensT, CoreSemanticColorTokensT {
  [key: string]: string
}

export type FontTokensT = {
  primaryFontFamily: string
}

export type FontT = {
  fontFamily: string
  fontWeight: Globals | "bold" | "normal" | "bolder" | "lighter" | number
  fontSize: string
  lineHeight: string | number
}

export type TypographyT = {
  font100: FontT
  font150: FontT
  font200: FontT
  font250: FontT
  font300: FontT
  font350: FontT
  font400: FontT
  font450: FontT
  font550: FontT
  font650: FontT
  font700: FontT
  font750: FontT
  font850: FontT
  font950: FontT
  font1050: FontT
  font1150: FontT
  font1250: FontT
  font1350: FontT
  font1450: FontT
  ParagraphXSmall: FontT
  ParagraphSmall: FontT
  ParagraphMedium: FontT
  ParagraphLarge: FontT
  LabelXSmall: FontT
  LabelSmall: FontT
  LabelMedium: FontT
  LabelLarge: FontT
  HeadingXSmall: FontT
  HeadingSmall: FontT
  HeadingMedium: FontT
  HeadingLarge: FontT
  HeadingXLarge: FontT
  HeadingXXLarge: FontT
  DisplayXSmall: FontT
  DisplaySmall: FontT
  DisplayMedium: FontT
  DisplayLarge: FontT
}

export type SizingT = {
  scale0: string
  scale100: string
  scale200: string
  scale300: string
  scale400: string
  scale500: string
  scale550: string
  scale600: string
  scale650: string
  scale700: string
  scale750: string
  scale800: string
  scale900: string
  scale1000: string
  scale1200: string
  scale1400: string
  scale1600: string
  scale2400: string
  scale3200: string
  scale4800: string
}

export type BreakpointsT = {
  small: number
  medium: number
  large: number
  xLarge: number
}
export type MediaQueryT = {
  small: string
  medium: string
  large: string
  xLarge: string
}
export type LightingT = {
  shadow400: string
  shadow500: string
  shadow600: string
  shadow700: string
  overlay0: string
  overlay100: string
  overlay200: string
  overlay300: string
  overlay400: string
  overlay500: string
  overlay600: string
}

export type AnimationT = {
  timing100: number
  timing200: number
  timing300: number
  timing400: number
  timing500: number
  timing600: number
  timing700: number
  timing800: number
  timing900: number
  timing1000: number
  timing2000: number
  easeOutCurve: Array<number>
  easeInCurve: Array<number>
  easeInOutCurve: Array<number>
  easeInQuinticCurve: Array<number>
  easeOutQuinticCurve: Array<number>
  easeInOutQuinticCurve: Array<number>
  linearCurve: Array<number>
}

export type ZIndexDefaultT = {
  drawer: number
  header: number
  overlay: number
  modal: number
  select: number
  alert: number
}

export interface ZIndexT extends ZIndexDefaultT {
  [key: string]: number
}

export type ThemeT = {
  animation: AnimationT
  breakpoints: BreakpointsT
  colors: ColorsT
  lighting: LightingT
  mediaQuery: MediaQueryT
  sizing: SizingT
  typography: TypographyT
  zIndex: ZIndexT
}
