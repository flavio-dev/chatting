import { combineReducers } from 'redux-immutable'
import listUsers from 'app/reducers'
import userReducers from 'routes/user/reducers/index'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    listUsersReducer: listUsers,
    userReducers,
    ...asyncReducers
  })
}
