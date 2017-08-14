import { connect } from 'react-redux'

import { setConnection, sendMessage } from 'store/actions'
import { getInitialListUsers } from 'app/actions'
import { getUsers } from 'app/selectors'

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
  },
  getInitialListUsers: () => {
    dispatch(getInitialListUsers())
  }
})

const mapStateToProps = (state) => ({
  messages: getMessages(state),
  users: getUsers(state)
})

export default connect(mapStateToProps, mapActionCreators)(User)
