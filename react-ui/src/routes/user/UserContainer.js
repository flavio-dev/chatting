import { connect } from 'react-redux'

import { setConnection, sendMessage } from 'store/actions'
import { getInitialListUsers } from 'app/actions'

import User from './User'
import { getMessagesJS, getUsersICanInteractWith } from './selectors'
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
  },
  getInitialListUsers: () => {
    dispatch(getInitialListUsers())
  }
})

const mapStateToProps = (state) => ({
  messages: getMessagesJS(state),
  users: getUsersICanInteractWith(state)
})

export default connect(mapStateToProps, mapActionCreators)(User)
