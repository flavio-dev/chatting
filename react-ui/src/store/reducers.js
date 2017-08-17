import { combineReducers } from 'redux-immutable'
import appReducers from 'app/reducers'
import userReducers from 'routes/user/reducers'
import { routerReducer } from 'react-router-redux'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    appReducers,
    userReducers,
    routerReducer,
    ...asyncReducers
  })
}
