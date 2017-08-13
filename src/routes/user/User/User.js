import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  constructor(props) {
    super(props)
    this.userId = ''
    this.state = {
      textMessage: '',
      messages: this.props.messages
    }
    this.typing = this.typing.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
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

  typing(event) {
    this.setState(
      {textMessage: event.target.value}
    )
  }

  sendMessage() {
    this.props.sendMessage(this.state.textMessage, this.userId, 'ALL')
  }

  render() {
    return (
      <div>
        <span>hello {this.userId}</span>
        <input type='text' value={this.state.textMessage} onChange={this.typing} />
        <div onClick={this.sendMessage}>SEND MESSAGE</div>

        <div>Displaying messages:</div>
        {this.state.messages.map((message, index) => {
          return (
            <div key={index}>
              {message.message} sent by {message.from} to {message.to}
            </div>
          )
        })}
      </div>
    )
  }
}

User.propTypes = {
  match: PropTypes.object,
  setUserId: PropTypes.func,
  setConnection: PropTypes.func,
  sendMessage: PropTypes.func,
  messages: PropTypes.array
}

export default User
