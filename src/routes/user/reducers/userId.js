import { SET_USER_ID } from '../actions'

const initialState = ''
export const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return action.userId
    default:
      return state
  }
}

export default userIdReducer
