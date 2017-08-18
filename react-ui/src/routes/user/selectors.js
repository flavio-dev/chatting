import { createSelector } from 'reselect'
import { getUsersJS } from 'app/selectors'

const getUserReducers = state => state.get('userReducers')

export const getUserId = createSelector(
  [getUserReducers],
  user => user.get('userId')
)

export const getUsersICanInteractWith = createSelector(
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
  [getUserReducers],
  user => user.get('userMessages').toJS()
)
