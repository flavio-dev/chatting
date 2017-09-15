import { connect } from 'react-redux'
// import { push } from 'react-router-redux'

import App from './App'
import { getInitialListUsers } from 'app/actions'
import { setConnection } from 'store/actions'
import { getUsersJS, getNumUsers } from 'app/selectors'

const mapActionCreators = (dispatch) => ({
  getInitialListUsers: () => {
    dispatch(getInitialListUsers())
  },
  redirectToUser: (userId) => {
    console.log('user id in the redirectToUser userId = ', userId);
    dispatch(setConnection(userId))
  }
})

const mapStateToProps = (state) => ({
  users: getUsersJS(state),
  numUsers: getNumUsers(state)
})

export default connect(mapStateToProps, mapActionCreators)(App)
