require("dotenv").config()
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
})
const withTM = require("next-transpile-modules")(["react-shadow-picker"])

module.exports = withTM(
  withMDX({
    webpack: function (config) {
      config.externals = config.externals || {}
      config.externals["styletron-server"] = "styletron-server"
      config.node = { fs: "empty" }
      return config
    },
    exportTrailingSlash: true,
    pageExtensions: ["page.ts", "page.tsx", "api.ts", "api.tsx", "page.mdx"],
    env: {
      GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    },
  })
)
