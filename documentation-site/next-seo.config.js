const title = "Lighthouse Design System"
const description = `Lighthouse Design System is a flexible Design System based on atomic design principles.
You can design and develop beautiful React Applications at the same time using the same
sources of components.`

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
