export const SET_USER_ID = 'SET_USER_ID'
export const SELECT_USER = 'SELECT_USER'

export const setUserId = (userId) => {
  return {
    type: SET_USER_ID,
    userId
  }
}

export const selectUser = (userId) => {
  return {
    type: SELECT_USER,
    userId
  }
}
