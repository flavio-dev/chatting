import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'

export const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
