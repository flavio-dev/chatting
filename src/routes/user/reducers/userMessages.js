import Immutable from 'immutable'
import { MESSAGE_RECEIVED } from 'store/actions'

const initialState = Immutable.List()

export const userMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return state.push(action.message)
    default:
      return state
  }
}

export default userMessagesReducer
