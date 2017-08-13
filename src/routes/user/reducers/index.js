import { combineReducers } from 'redux-immutable'

import { userIdReducer } from './userId'
import { userMessagesReducer } from './userMessages'

export default combineReducers({
  userId: userIdReducer,
  userMessages: userMessagesReducer
})
