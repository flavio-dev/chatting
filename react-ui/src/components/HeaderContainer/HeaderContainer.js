import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { disconnecting } from 'store/actions'
import { getUserId } from 'routes/user/selectors'
import { getConnectionState } from 'app/selectors'

import Header from './Header'

const mapActionCreators = (dispatch) => ({
  disconnecting: (userId) => {
    dispatch(disconnecting(userId))
    dispatch(push('/'))
  }
})

const mapStateToProps = (state) => ({
  userId: getUserId(state),
  connectionStatus: getConnectionState(state)
})

export default connect(mapStateToProps, mapActionCreators)(Header)
