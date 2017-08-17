import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { disconnecting } from 'store/actions'

import Header from './Header'

const mapActionCreators = (dispatch) => ({
  disconnecting: () => {
    dispatch(disconnecting())
    dispatch(push('/'))
  }
})

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapActionCreators)(Header)
