const title = "Lighthouse Design System"
const description = `Lighthouse is a continuous design system for integrating design with development workflows.
Designing just got easier as you can directely import coded components, use the exact same layouts and measurments, and publish in no matter of time. Lighthouse Design System also provides fully customizable themes.`

const SEO = {
  title,
  description,
  canonical: "https://lighthouse.harbor.school",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://lighthouse.harbor.school",
    title,
    description,
    images: [
      {
        url: "https://lighthouse.harbor.school/static/images/brand/og.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@ruucm",
    site: "@ruucm",
    cardType: "summary_large_image",
  },
}

export default SEO
