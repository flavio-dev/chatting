import { CONNECTING, MESSAGE_RECEIVED } from 'store/actions'

const initialState = []

export const userMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECTING:
      return state
    case MESSAGE_RECEIVED:
      return state.concat(action.message)
    default:
      return state
  }
}

export default userMessagesReducer
