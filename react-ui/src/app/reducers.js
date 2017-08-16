import Immutable from 'immutable'
import { SET_LIST_USERS } from 'app/actions'
import { NEW_USER_LOGIN } from 'store/actions'

const initialState = Immutable.List()
export const listUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_USERS:
      return Immutable.fromJS(action.listUsersReducer)
    case NEW_USER_LOGIN:
      return state.push(action.userId)
    default:
      return state
  }
}

export default listUsersReducer
