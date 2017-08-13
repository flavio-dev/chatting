import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import App from './App'
import { getInitialListUsers } from 'app/actions'
import { getUsers, getNumUsers } from 'app/selectors'

const mapActionCreators = (dispatch) => ({
  getInitialListUsers: () => {
    dispatch(getInitialListUsers())
  },
  redirectToUser: (userId) => {
    dispatch(push('/' + userId))
  }
})

const mapStateToProps = (state) => ({
  users: getUsers(state),
  numUsers: getNumUsers(state)
})

export default connect(mapStateToProps, mapActionCreators)(App)
