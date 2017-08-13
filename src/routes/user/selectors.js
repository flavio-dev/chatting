export const getMessages = state => {
  return state.get('userReducers').get('userMessages')
}
