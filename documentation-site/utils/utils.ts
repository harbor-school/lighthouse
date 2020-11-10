/* eslint-disable prefer-const */
// @ts-nocheck
export const capitalize = (s) => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const guideOn = false
export const sizeBg = guideOn ? "#c4deb7" : "transparent"
export const guideBg = guideOn ? "#b2b2b2" : "transparent"

export function fileNameToComponentName(str) {
  const arr = str.split("-")
  const capital = arr.map((item, index) =>
    index ? item.charAt(0).toUpperCase() + item.slice(1) : capitalize(item)
  )
  return capital.join("")
}

export function isHex(value) {
  return /^#[0-9A-F]{6}$/i.test(value)
}

export function getColorfromString(string, themeGenerator) {
  if (typeof string === "string" && !isHex(string)) {
    const arr = string.split(".")
    if (arr[0] === "colors") return themeGenerator.colors.colorScale[arr[1]]
    // find color value from the store (themeGenerator)
    else if (arr[0] === "foundation")
      return getColorfromString(themeGenerator.colors.colorFoundation[arr[1]], themeGenerator)
  } else return string
}

export function hexToHSL(H) {
  const ex = /^#([\da-f]{3}){1,2}$/i
  if (ex.test(H)) {
    // convert hex to RGB first
    let r = 0,
      g = 0,
      b = 0
    if (H.length == 4) {
      r = "0x" + H[1] + H[1]
      g = "0x" + H[2] + H[2]
      b = "0x" + H[3] + H[3]
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2]
      g = "0x" + H[3] + H[4]
      b = "0x" + H[5] + H[6]
    }
    // then to HSL
    r /= 255
    g /= 255
    b /= 255
    const cmin = Math.min(r, g, b)
    const cmax = Math.max(r, g, b)
    const delta = cmax - cmin
    let h = 0
    let s = 0
    let l = 0

    if (delta == 0) h = 0
    else if (cmax == r) h = ((g - b) / delta) % 6
    else if (cmax == g) h = (b - r) / delta + 2
    else h = (r - g) / delta + 4

    h = Math.round(h * 60)

    if (h < 0) h += 360

    l = (cmax + cmin) / 2
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
    s = +(s * 100).toFixed(0)
    l = +(l * 100).toFixed(0)

    return "hsl(" + h + "," + s + "%," + l + "%)"
  } else {
    return "Invalid input color"
  }
}

export function hexAToHSLA(H) {
  const ex = /^#([\da-f]{4}){1,2}$/i
  if (ex.test(H)) {
    let r = 0,
      g = 0,
      b = 0,
      a = 1
    // 4 digits
    if (H.length == 5) {
      r = "0x" + H[1] + H[1]
      g = "0x" + H[2] + H[2]
      b = "0x" + H[3] + H[3]
      a = "0x" + H[4] + H[4]
      // 8 digits
    } else if (H.length == 9) {
      r = "0x" + H[1] + H[2]
      g = "0x" + H[3] + H[4]
      b = "0x" + H[5] + H[6]
      a = "0x" + H[7] + H[8]
    }

    // normal conversion to HSLA
    r /= 255
    g /= 255
    b /= 255
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0

    if (delta == 0) h = 0
    else if (cmax == r) h = ((g - b) / delta) % 6
    else if (cmax == g) h = (b - r) / delta + 2
    else h = (r - g) / delta + 4

    h = Math.round(h * 60)

    if (h < 0) h += 360

    l = (cmax + cmin) / 2
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)

    a = (a / 255).toFixed(2)

    return "hsla(" + h + "," + s + "%," + l + "%," + a + ")"
  } else {
    return "Invalid input color"
  }
}
export function HSLAToHexA(hsla) {
  const ex = /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i
  if (ex.test(hsla)) {
    const sep = hsla.indexOf(",") > -1 ? "," : " "
    hsla = hsla.substr(5).split(")")[0].split(sep)

    // strip the slash
    if (hsla.indexOf("/") > -1) hsla.splice(3, 1)

    let h = hsla[0],
      s = hsla[1].substr(0, hsla[1].length - 1) / 100,
      l = hsla[2].substr(0, hsla[2].length - 1) / 100,
      a = hsla[3]

    // strip label and convert to degrees (if necessary)
    if (h.indexOf("deg") > -1) h = h.substr(0, h.length - 3)
    else if (h.indexOf("rad") > -1) h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI))
    else if (h.indexOf("turn") > -1) h = Math.round(h.substr(0, h.length - 4) * 360)
    if (h >= 360) h %= 360

    // strip % from alpha, make fraction of 1 (if necessary)
    if (a.indexOf("%") > -1) a = a.substr(0, a.length - 1) / 100

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0

    if (0 <= h && h < 60) {
      r = c
      g = x
      b = 0
    } else if (60 <= h && h < 120) {
      r = x
      g = c
      b = 0
    } else if (120 <= h && h < 180) {
      r = 0
      g = c
      b = x
    } else if (180 <= h && h < 240) {
      r = 0
      g = x
      b = c
    } else if (240 <= h && h < 300) {
      r = x
      g = 0
      b = c
    } else if (300 <= h && h < 360) {
      r = c
      g = 0
      b = x
    }
    r = Math.round((r + m) * 255).toString(16)
    g = Math.round((g + m) * 255).toString(16)
    b = Math.round((b + m) * 255).toString(16)
    a = Math.round(a * 255).toString(16)

    if (r.length == 1) r = "0" + r
    if (g.length == 1) g = "0" + g
    if (b.length == 1) b = "0" + b
    if (a.length == 1) a = "0" + a

    return "#" + r + g + b + a
  } else {
    return "Invalid input color"
  }
}

export function isDarkTheme({ theme }) {
  let hsl = hexToHSL(theme.colors.backgroundPrimary)
  const sep = hsl.indexOf(",") > -1 ? "," : " "
  hsl = hsl.substr(4).split(")")[0].split(sep)
  const [hue, saturation, lightness] = hsl
  const lightnessAmount = parseFloat(lightness) / 100.0
  if (lightnessAmount < 0.5) return true
}

export function isDarkMode() {
  return isClient && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
}

export type Extendtable<T> = {
  [P in keyof T]: T[P]
}

export const isClient = typeof window !== "undefined"
