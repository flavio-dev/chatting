import { combineReducers } from 'redux-immutable'

import { userIdReducer } from './userId'
import { userMessagesReducer } from './userMessages'
import { userSelectReducer } from './userSelected'

export default combineReducers({
  userId: userIdReducer,
  userMessages: userMessagesReducer,
  userSelected: userSelectReducer
})
