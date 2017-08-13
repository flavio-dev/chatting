import React, { Component } from 'react'
import PropTypes from 'prop-types'

import logo from './logo.svg'
import styles from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      numUsers: 0,
      userId: ''
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
  }

  enterChat() {
    const slug = this.state.userId.toLowerCase()
    this.props.redirectToUser(slug)
  }

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt='logo' />
          <h2>Welcome {this.state.userId} to Chatting</h2>
        </div>
        <div className={styles.AppIntro}>
          Enter your name:
          <input type='text' value={this.state.userId} onChange={this.typing} />
          <div onClick={this.enterChat}>Enter the chatroom</div>
        </div>
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
  getInitialListUsers: PropTypes.func,
  redirectToUser: PropTypes.func
}

export default App
