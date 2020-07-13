import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return siteMetadata
}
