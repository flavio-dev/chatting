export const SET_LIST_USERS = 'SET_LIST_USERS'
export const GET_INITIAL_LIST_USERS = 'GET_INITIAL_LIST_USERS'

export const setListUsers = (listUsers) => {
  return {
    type: SET_LIST_USERS,
    listUsers
  }
}

export const getInitialListUsers = () => {
  return {
    type: GET_INITIAL_LIST_USERS
  }
}
