import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      numUsers: 0,
      userId: '',
      hasTyped: false
    }

    this.typing = this.typing.bind(this)
    this.enterChat = this.enterChat.bind(this)
  }

  componentDidMount() {
    this.props.getInitialListUsers()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({users: nextProps.users})
    this.setState({numUsers: nextProps.numUsers})
  }

  typing(event) {
    this.setState(
      {userId: event.target.value}
    )

    if (event.target.value && event.target.value.length > 0) {
      this.setState({
        hasTyped: true
      })
    } else {
      this.setState({
        hasTyped: false
      })
    }
  }

  enterChat() {
    const slug = this.state.userId.toLowerCase()
    this.props.redirectToUser(slug)
  }

  render() {
    let style = this.state.hasTyped ? 'App' : 'AppNotTyped'
    return (
      <div className={styles[style]}>
        <div className={styles.AppContent}>
          <h2 className={styles.AppTitle}>Welcome to Chatting {this.state.userId}!</h2>
          <input
            className={styles.AppInput}
            type='text'
            value={this.state.userId}
            onChange={this.typing}
            placeholder='Enter your name' />
          <div className={styles.AppButtonContainer}>
            <button className={styles.AppButton} onClick={this.enterChat}>Enter the chatroom</button>
          </div>
          <p className={styles.AppListUsers}>There are currently {this.state.numUsers} user(s) online</p>
          {this.state.users.map((user, index) => {
            return (
              <div className={styles.AppListUser} key={index}>
                <div className={styles.AppOnline} /><span>{user}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  users: PropTypes.array,
  numUsers: PropTypes.number,
  getInitialListUsers: PropTypes.func,
  redirectToUser: PropTypes.func
}

export default App
