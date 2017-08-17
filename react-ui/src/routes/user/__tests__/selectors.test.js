import Immutable from 'immutable'

import { getUsersICanInteractWith, getMessagesJS } from '../selectors'

describe('selectors for user', () => {
  const state = Immutable.Map({
    userReducers: Immutable.Map({
      userId: 'userId',
      userMessages: Immutable.List([
        {
          message: 'messagetext',
          from: 'me',
          to: 'you'
        },
        {
          message: 'messagetext second',
          from: 'you',
          to: 'me'
        }
      ])
    }),
    listUsersReducer: Immutable.List(['userId', 'secondUserId'])
  })

  it('getUsersICanInteractWith selector returns list of users I can interact with', () => {
    expect(getUsersICanInteractWith(state)).toEqual(['secondUserId'])
  })

  it('getMessagesJS selector returns list of messages for a the user in store', () => {
    expect(getMessagesJS(state)).toEqual([{
      message: 'messagetext',
      from: 'me',
      to: 'you'
    },
    {
      message: 'messagetext second',
      from: 'you',
      to: 'me'
    }])
  })
})
