import { getUsers } from 'app/selectors'

const getUserId = state => {
  return state.get('userReducers').get('userId')
}

export const getUsersICanInteractTo = state => {
  const userId = getUserId(state)
  return getUsers(state).filter((user) => {
    return user !== userId
  })
}

export const getMessages = state => {
  return state.get('userReducers').get('userMessages').toJS()
}
