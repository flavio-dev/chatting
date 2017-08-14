import React, { Component } from 'react'
import PropTypes from 'prop-types'

import UserWindow from 'components/UserWindow'

import styles from './User.css'

class User extends Component {
  constructor(props) {
    super(props)
    this.userId = ''
    this.state = {
      messages: this.props.messages
    }

    this.filterMessage = this.filterMessage.bind(this)
  }

  componentWillMount() {
    this.userId = this.props.match.params.userId
    this.props.setUserId(this.userId)
  }

  componentDidMount() {
    this.props.setConnection(this.userId)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({messages: nextProps.messages})
  }

  filterMessage(to) {
    return this.state.messages.filter(message => {
      return message.to === to
    })
  }

  render() {
    return (
      <div className={styles.UserContent}>
        <h2 className={styles.UserTitle}>Hello {this.userId}</h2>
        <div className={styles.UserBoard}>
          <UserWindow
            title='forum'
            messages={this.filterMessage('ALL')}
            to='ALL'
            you={this.userId}
            sendMessage={this.props.sendMessage}
           />
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
  messages: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string
  }))
}

export default User
