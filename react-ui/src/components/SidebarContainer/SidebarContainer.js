import { connect } from 'react-redux'

import { selectUser } from 'routes/user/actions'
import { getUsersJS } from 'app/selectors'
import { getUserSelected } from 'routes/user/selectors'

import Sidebar from './Sidebar'

const mapActionCreators = (dispatch) => ({
  selectUser: (userId) => {
    console.log('selecting userID = ', userId)
    dispatch(selectUser(userId))
  }
})

const mapStateToProps = (state) => ({
  listOfUsers: getUsersJS(state),
  userSelected: getUserSelected(state)
})

export default connect(mapStateToProps, mapActionCreators)(Sidebar)
