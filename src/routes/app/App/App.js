import React, { Component } from 'react'
import PropTypes from 'prop-types'

import logo from './logo.svg'
import styles from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      numUsers: 0
    }
  }

  componentDidMount() {
    this.props.getInitialListUsers()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({users: nextProps.users})
    this.setState({numUsers: nextProps.numUsers})
  }

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>There are {this.state.numUsers} user(s) online</p>
        {this.state.users.map((user, index) => {
          return (
            <div key={index}>
              {user}
            </div>
          )
        })}
      </div>
    )
  }
}

App.propTypes = {
  users: PropTypes.array,
  numUsers: PropTypes.number,
  getInitialListUsers: PropTypes.func
}

export default App
