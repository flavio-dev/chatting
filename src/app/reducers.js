import Immutable from 'immutable'
import { SET_LIST_USERS } from 'app/actions'
import { NEW_USER_LOGIN } from 'store/actions'
import { SET_USER_ID } from 'routes/user/actions'

const initialState = Immutable.List()
export const listUsers = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_USERS:
      return Immutable.fromJS(action.listUsers)
    case NEW_USER_LOGIN:
    case SET_USER_ID:
      return state.push(action.userId)
    default:
      return state
  }
}

export default listUsers
