import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'

import styles from './Layout.css'

export const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <Header />
    <div className={styles.LayoutContent}>
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
