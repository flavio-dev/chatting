import { combineReducers } from 'redux-immutable'

import { listUsersReducer } from './listUsers'
import { notifyReducer } from './notify'
import { connectionStatusReducer } from './connectionStatus'

export default combineReducers({
  listUsers: listUsersReducer,
  notify: notifyReducer,
  connectionStatus: connectionStatusReducer
})
