import { SELECT_USER } from '../actions'

export const userSelectReducer = (state = '', action) => {
  switch (action.type) {
    case SELECT_USER:
      return action.userId
    default:
      return state
  }
}

export default userSelectReducer
