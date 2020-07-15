import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import useSiteMetaQuery from '../hooks/useSiteMetaQuery'

const Layout = ({ children }) => {
  const siteMetadata = useSiteMetaQuery()
  return (
    <>
      <Helmet
        title={siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: 'Add your website description...',
          },
          {
            name: 'keywords',
            content: 'SiteName, bestsite, ..',
          },
        ]}
      >
        <html lang='en' />
      </Helmet>
	    <header>
		    <span className="logo">Logo</span>
	    </header>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
