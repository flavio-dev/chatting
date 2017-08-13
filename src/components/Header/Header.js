import React from 'react'

import styles from './Header.css'
import logo from './logo.png'

export const Header = () => (
  <div className={styles.Header}>
    <div className={styles.HeaderContent}>
      <img src={logo} className={styles.HeaderLogo} alt='logo' />
      <div className={styles.HeaderTitle}>Chatting</div>
    </div>
  </div>
)

export default Header
