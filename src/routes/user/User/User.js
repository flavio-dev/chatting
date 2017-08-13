import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  constructor(props) {
    super(props)
    this.userId = ''
  }

  componentWillMount() {
    this.userId = this.props.match.params.userId
    this.props.setUserId(this.userId)
  }

  render() {
    return (
      <div>
        <span>hello {this.userId}</span>
      </div>
    )
  }
}

User.propTypes = {
  match: PropTypes.object,
  setUserId: PropTypes.func,
  messages: PropTypes.array
}

export default User
