import * as React from "react"

const seoData = {
  title: "Akshtiha Adepu",
  description:
    "Akshitha Adepu is a tech-savvy software engineer focused on designing innovative full-stack architectures and crafting intuitive user experiences.",
  author: "Akshitha Adepu",
  logo: "https://akshithaadepu.github.io/static/images/emojis/technologist.png",
  siteUrl: "https://akshithaadepu.github.io",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta name="logo" content={seoData.logo} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:logo" content={seoData.logo} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:logo" content={seoData.logo} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
