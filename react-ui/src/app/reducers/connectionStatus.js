import { DISCONNECTED, CONNECTED  } from 'store/actions'

const initialState = ''
export const connectionStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCONNECTED:
    case CONNECTED:
      return action.status
    default:
      return state
  }
}

export default connectionStatusReducer
