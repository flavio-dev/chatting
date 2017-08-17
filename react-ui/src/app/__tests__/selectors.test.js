import Immutable from 'immutable'

import { getUsersJS, getNumUsers } from '../selectors'

describe('selectors for list of users', () => {
  const state = Immutable.Map({
    listUsersReducer: Immutable.List(['userId', 'secondUserId'])
  })

  it('getUsersJS selector returns list of users', () => {
    expect(getUsersJS(state)).toEqual(['userId', 'secondUserId'])
  })

  it('getNumUsers selector returns list of messages for a the user in store', () => {
    expect(getNumUsers(state)).toEqual(2)
  })
})
