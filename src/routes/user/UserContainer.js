import { connect } from 'react-redux'

import { setConnection, sendMessage } from 'store/actions'

import User from './User'
import { getMessages } from './selectors'
import { setUserId } from './actions'

const mapActionCreators = (dispatch) => ({
  setUserId: (userId) => {
    dispatch(setUserId(userId))
  },
  setConnection: (userId) => {
    dispatch(setConnection(userId))
  },
  sendMessage: (message, from, to) => {
    dispatch(sendMessage(message, from, to))
  }
})

const mapStateToProps = (state) => ({
  messages: getMessages(state)
})

export default connect(mapStateToProps, mapActionCreators)(User)
