import React from 'react'
import PropTypes from 'prop-types'

import HeaderContainer from 'components/HeaderContainer'
import Footer from 'components/Footer'

export const Layout = ({ children }) => (
  <div>
    <HeaderContainer />
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
