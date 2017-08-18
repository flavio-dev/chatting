import { combineReducers } from 'redux-immutable'

import { listUsersReducer } from './listUsers'
import { notifyReducer } from './notify'

export default combineReducers({
  listUsers: listUsersReducer,
  notify: notifyReducer
})
