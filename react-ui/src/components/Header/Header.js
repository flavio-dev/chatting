import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { disconnecting } from 'store/actions'

import styles from './Header.css'
import logo from './logo.png'

export const Header = ({disconnecting}) => (
  <div className={styles.Header}>
    <div className={styles.HeaderContent}>
      <div className={styles.HeaderBrand}>
        <img src={logo} className={styles.HeaderLogo} alt='logo' />
        <div className={styles.HeaderTitle} onClick={disconnecting}>Chatting</div>
      </div>
      <button onClick={disconnecting}>Logout</button>
    </div>
  </div>
)

const mapActionCreators = (dispatch) => ({
  disconnecting: () => {
    dispatch(disconnecting())
    dispatch(push('/'))
  }
})

const mapStateToProps = (state) => {}


export default connect(mapStateToProps, mapActionCreators)(Header)
