import { combineReducers } from 'redux-immutable'

import { userIdReducer } from './userId'

export default combineReducers({
  userId: userIdReducer
})
