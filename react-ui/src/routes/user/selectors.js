import { createSelector } from 'reselect'
import { getUsersJS } from 'app/selectors'

const getUser = state => state.get('userReducers')

const getUserId = createSelector(
  [getUser],
  user => user.get('userId')
)

export const getUsersICanInteractTo = createSelector(
  [
    getUserId,
    getUsersJS
  ],
  (
    userId,
    users
  ) => users.filter((user) => {
    return user !== userId
  })
)

export const getMessagesJS = createSelector(
  [getUser],
  user => user.get('userMessages').toJS()
)
