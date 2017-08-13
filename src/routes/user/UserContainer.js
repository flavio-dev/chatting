import { connect } from 'react-redux'

import User from './User'
import { setUserId } from './actions'

const mapActionCreators = (dispatch) => ({
  setUserId: (userId) => {
    dispatch(setUserId(userId))
  }
})

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapActionCreators)(User)
