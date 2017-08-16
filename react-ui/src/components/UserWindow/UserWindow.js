import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './UserWindow.css'

class UserWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textMessage: ''
    }
    this.typing = this.typing.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  typing(event) {
    this.setState(
      {textMessage: event.target.value}
    )
  }

  sendMessage() {
    this.props.sendMessage(this.state.textMessage, this.props.you, this.props.to)
    this.setState(
      {textMessage: ''}
    )
  }

  render() {
    return (
      <div className={styles.WindowWrapper}>
        <h2 className={styles.WindowTitle}>{this.props.online &&
          <div className={styles.WindowOnline} />
        }&nbsp;{this.props.title}</h2>
        <div className={styles.Window}>
          <div className={styles.WindowContentWrapper}>
            <div className={styles.WindowContent}>
              {this.props.messages.map((message, index) => {
                if (message.from === this.props.you) {
                  return (
                    <div className={styles.WindowYou} key={index}>
                      <span>you:&nbsp;</span>{message.message}
                    </div>
                  )
                } else {
                  return (
                    <div className={styles.WindowThem} key={index}>
                      <span>{message.from}:&nbsp;</span>{message.message}
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className={styles.WindowCTA}>
            <textarea value={this.state.textMessage} onChange={this.typing} placeholder='Type a message...' />
            <button onClick={this.sendMessage}>Send</button>
          </div>
        </div>
      </div>
    )
  }
}

UserWindow.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  you: PropTypes.string,
  messages: PropTypes.array,
  online: PropTypes.bool,
  sendMessage: PropTypes.func
}
export default UserWindow
