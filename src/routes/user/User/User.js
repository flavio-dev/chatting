import React, { Component } from 'react'
import PropTypes from 'prop-types'

import UserWindow from 'components/UserWindow'

import styles from './User.css'

class User extends Component {
  constructor(props) {
    super(props)
    this.userId = ''
    this.state = {
      messages: this.props.messages,
      users: this.props.users
    }

    this.filterMessage = this.filterMessage.bind(this)
  }

  componentWillMount() {
    this.userId = this.props.match.params.userId
    this.props.setUserId(this.userId)
  }

  componentDidMount() {
    this.props.setConnection(this.userId)
    this.props.getInitialListUsers()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.messages) {
      this.setState({
        messages: nextProps.messages,
        users: nextProps.users
      })
    }
  }

  filterMessage(user) {
    return this.state.messages.filter(message => {
      return (message.from === user && message.to === this.userId) ||
        (message.from === this.userId && message.to === user)
    })
  }

  filterMessageAll() {
    console.log('filterMessageAll = ', this.state.messages)
    return this.state.messages.filter(message => {
      return message.to === 'ALL'
    })
  }

  render() {
    return (
      <div className={styles.UserContent}>
        <h2 className={styles.UserTitle}>Hello {this.userId}</h2>
        <div className={styles.UserBoard}>
          <UserWindow
            title='forum'
            messages={this.filterMessageAll()}
            to='ALL'
            you={this.userId}
            sendMessage={this.props.sendMessage}
           />
          {this.state.users.map((user, index) => {
            return <UserWindow
              key={index}
              title={user}
              messages={this.filterMessage(user)}
              to={user}
              you={this.userId}
              sendMessage={this.props.sendMessage}
              online
            />
          })}
        </div>
      </div>
    )
  }
}

User.propTypes = {
  match: PropTypes.object,
  setUserId: PropTypes.func,
  setConnection: PropTypes.func,
  sendMessage: PropTypes.func,
  getInitialListUsers: PropTypes.func,
  messages: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string
  })),
  users: PropTypes.array
}

export default User
