import Immutable from 'immutable'

import { getUsersJS, getNumUsers, getConnectionState } from '../selectors'

describe('selectors for list of users', () => {
  const state = Immutable.Map({
    appReducers: Immutable.Map({
      listUsers: Immutable.List(['userId', 'secondUserId'])
    })
  })

  it('getUsersJS selector returns list of users', () => {
    expect(getUsersJS(state)).toEqual(['userId', 'secondUserId'])
  })

  it('getNumUsers selector returns number of users', () => {
    expect(getNumUsers(state)).toEqual(2)
  })
})

describe('selectors for status of the connection', () => {
  const state = Immutable.Map({
    appReducers: Immutable.Map({
      connectionStatus: 'CONNECTED'
    })
  })

  it('getConnectionState selector returns status', () => {
    expect(getConnectionState(state)).toEqual('CONNECTED')
  })
})
