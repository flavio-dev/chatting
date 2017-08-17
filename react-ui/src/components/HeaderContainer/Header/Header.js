import React from 'react'

import styles from './Header.css'
import logo from './logo.png'

export const Header = ({disconnecting}) => (
  <div className={styles.Header}>
    <div className={styles.HeaderContent}>
      <div className={styles.HeaderBrand} onClick={disconnecting}>
        <img src={logo} className={styles.HeaderLogo} alt='logo' />
        <div className={styles.HeaderTitle}>Chatting</div>
      </div>
      <button onClick={disconnecting}>Logout</button>
    </div>
  </div>
)

export default Header
