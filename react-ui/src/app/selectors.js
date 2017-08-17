import { createSelector } from 'reselect'

const getAppReducers = state => state.get('appReducers')
const getUsers = createSelector(
  [getAppReducers],
  appReducer => appReducer.get('listUsers')
)

export const getUsersJS = createSelector(
  [getUsers],
  listUsers => listUsers.toJS()
)

export const getNumUsers = createSelector(
  [getUsers],
  listUsers => listUsers.size
)
