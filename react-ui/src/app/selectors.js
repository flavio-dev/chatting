export const getUsers = state => {
  return state.get('listUsersReducer').toJS()
}

export const getNumUsers = state => {
  return state.get('listUsersReducer').size
}
