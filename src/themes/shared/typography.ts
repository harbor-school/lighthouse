import { TypographyT, FontTokensT } from "../types"

export const defaultFontTokens: FontTokensT = {
  primaryFontFamily: '"Poppins", system-ui, Helvetica, Arial, sans-serif',
}

export default (fontTokens: FontTokensT = defaultFontTokens): TypographyT => {
  const font100 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "20px",
  }
  const font150 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "16px",
  }
  const font200 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
  }
  const font250 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "16px",
  }
  const font300 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
  }
  const font350 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "20px",
  }
  const font400 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
  }
  const font450 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "24px",
  }
  const font550 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "28px",
  }
  const font650 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: "32px",
  }
  const font700 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "28px",
    fontWeight: 500,
    lineHeight: "40px",
  }
  const font750 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "28px",
    fontWeight: 800,
    lineHeight: "36px",
  }
  const font850 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "32px",
    fontWeight: 800,
    lineHeight: "40px",
  }
  const font950 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "36px",
    fontWeight: 800,
    lineHeight: "44px",
  }
  const font1050 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "40px",
    fontWeight: 800,
    lineHeight: "52px",
  }
  const font1150 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "36px",
    fontWeight: 800,
    lineHeight: "44px",
  }
  const font1250 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "44px",
    fontWeight: 800,
    lineHeight: "52px",
  }
  const font1350 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "52px",
    fontWeight: 800,
    lineHeight: "64px",
  }
  const font1450 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: "96px",
    fontWeight: 800,
    lineHeight: "112px",
  }

  return {
    font100,
    font150,
    font200,
    font250,
    font300,
    font350,
    font400,
    font450,
    font550,
    font650,
    font700,
    font750,
    font850,
    font950,
    font1050,
    font1150,
    font1250,
    font1350,
    font1450,
    ParagraphXSmall: font100,
    ParagraphSmall: font200,
    ParagraphMedium: font300,
    ParagraphLarge: font400,
    LabelXSmall: font150,
    LabelSmall: font250,
    LabelMedium: font350,
    LabelLarge: font450,
    HeadingXSmall: font550,
    HeadingSmall: font650,
    HeadingMedium: font750,
    HeadingLarge: font850,
    HeadingXLarge: font950,
    HeadingXXLarge: font1050,
    DisplayXSmall: font1150,
    DisplaySmall: font1250,
    DisplayMedium: font1350,
    DisplayLarge: font1450,
  }
}
