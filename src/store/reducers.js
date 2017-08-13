import { combineReducers } from 'redux-immutable'
import listUsers from 'app/reducers'
import userReducers from 'routes/user/reducers/index'
import { routerReducer } from 'react-router-redux'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    listUsersReducer: listUsers,
    userReducers,
    routerReducer,
    ...asyncReducers
  })
}
