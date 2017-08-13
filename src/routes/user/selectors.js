export const getMessages = state => {
  console.log('state = ', state)
  console.log('state.get(cloudCastReducers) = ', state.get('cloudcastReducers').get('cloudcastConnection'))
  return state.get('cloudcastReducers').get('cloudcastConnection')
}
