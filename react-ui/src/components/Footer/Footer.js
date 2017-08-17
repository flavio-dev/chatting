import React from 'react'

import styles from './Footer.css'
import Heart from 'components/Heart'

export const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.FooterContent}>
      Made with&nbsp;<Heart />&nbsp;by&nbsp;<a href='https://github.com/flavio-dev'>flavio-dev</a>
    </div>
  </div>
)

export default Footer
