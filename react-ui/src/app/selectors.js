import { createSelector } from 'reselect'

const getListUsers = state => state.get('listUsersReducer')

export const getUsersJS = createSelector(
  [getListUsers],
  listUsers => listUsers.toJS()
)

export const getNumUsers = createSelector(
  [getListUsers],
  listUsers => listUsers.size
)
