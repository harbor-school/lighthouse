export function increaseBrightness(hex, percent) {
  // strip the leading # if it's there
  hex = hex.replace(/^\s*#|\s*$/g, "")

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (hex.length == 3) {
    hex = hex.replace(/(.)/g, "$1$1")
  }

  const r = parseInt(hex.substr(0, 2), 16),
    g = parseInt(hex.substr(2, 2), 16),
    b = parseInt(hex.substr(4, 2), 16)

  return (
    "#" +
    (0 | ((1 << 8) + r + ((256 - r) * percent) / 100)).toString(16).substr(1) +
    (0 | ((1 << 8) + g + ((256 - g) * percent) / 100)).toString(16).substr(1) +
    (0 | ((1 << 8) + b + ((256 - b) * percent) / 100)).toString(16).substr(1)
  )
}

export function colorLuminanceByPercentage(hex, percentage) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "")
  if (hex.length < 6) {
    hex = hex.replace(/(.)/g, "$1$1")
  }
  percentage = percentage || 0
  // Convert to decimal and change luminosity
  let rgb = "#",
    c
  for (let i = 0; i < 3; ++i) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * percentage), 255)).toString(16)
    rgb += ("00" + c).substr(c.length)
  }
  return rgb
}

export function colorLuminanceByNumber(hex, number) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "")
  if (hex.length < 6) {
    hex = hex.replace(/(.)/g, "$1$1")
  }
  number = number || 0
  // Convert to decimal and change luminosity
  let rgb = "#",
    c
  for (let i = 0; i < 3; ++i) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + (number / 100) * 255), 255)).toString(16)
    rgb += ("00" + c).substr(c.length)
  }
  return rgb
}
