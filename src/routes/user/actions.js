export const SET_USER_ID = 'SET_USER_ID'
export const SEND_MESSAGE = 'SEND_MESSAGE'

export const setUserId = (userId) => {
  return {
    type: SET_USER_ID,
    userId
  }
}
