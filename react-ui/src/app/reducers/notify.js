import { NEW_USER_LOGIN, DISCONNECTED, CONNECTED  } from 'store/actions'
import { notify } from 'react-notify-toast';

const initialState = ''
export const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCONNECTED:
      notify.show(action.message, 'error', 5000)
      return action.message
    case NEW_USER_LOGIN:
    case CONNECTED:
      notify.show(action.message, 'success', 5000)
      return action.message
    default:
      return state
  }
}

export default notifyReducer
