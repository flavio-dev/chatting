import React from 'react'

import styles from './Header.css'
import logo from './logo.png'

export const Header = ({disconnecting, userId, connectionStatus}) => (
  <div className={styles.Header}>
    <div className={styles.HeaderContent}>
      <div className={styles.HeaderBrand} onClick={() => disconnecting(userId)}>
        <img src={logo} className={styles.HeaderLogo} alt='logo' />
        <div className={styles.HeaderTitle}>Chatting</div>
      </div>
      {connectionStatus === 'connected' &&
        <button onClick={() => disconnecting(userId)}>Logout</button>
      }
    </div>
  </div>
)

export default Header
