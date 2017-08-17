import Immutable from 'immutable'

import { getUsersJS, getNumUsers } from '../selectors'

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
