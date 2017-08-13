import Immutable from 'immutable'
import { SET_LIST_USERS } from 'app/actions'

const initialState = Immutable.List()
export const listUsers = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_USERS:
      return Immutable.fromJS(action.listUsers)
    default:
      return state
  }
}

export default listUsers
