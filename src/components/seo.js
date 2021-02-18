import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = ({ pathname, titleOverride, descriptionOverride, pathnameOverride, imageOverride, jobDescription, jobDatePosted, jobClosingDate, noIndex }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    datoCmsSite: {
      globalSeo: { 
        siteName,
        titleSuffix,
        twitterAccount,
        fallbackSeo: {
          title,
          description
        }
      }
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
        }
      }
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          twitterAccount
          fallbackSeo {
            title
            description
            twitterCard
          }
        }
      }
    }
  `)
  return (
    <Helmet defer={false} titleTemplate={`%s${titleSuffix}`}>
      <html lang="en" />
      <link rel="canonical" href={`${siteUrl}${pathnameOverride ? pathnameOverride : pathname}`}/>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <title>{titleOverride ? titleOverride : title }</title>
      <meta name="description" content={descriptionOverride ? descriptionOverride : description} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${imageOverride ? imageOverride : 'https://www.datocms-assets.com/30296/1593166456-mission-2x.png'}`} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterAccount} />

      { noIndex && (
        <meta name="robots" content="noindex" />
      )}

      <meta name="msvalidate.01" content="457B0C70F42DEE17D14A9A341FE2C590" />
      
    </Helmet>
  )
}

export default SEO