import Immutable from 'immutable'

import { MESSAGE_RECEIVED } from 'store/actions'
import userIdReducer from '../reducers/userId'
import userMessagesReducer from '../reducers/userMessages'
import { SET_USER_ID } from '../actions'

describe('reducers for the userId', () => {
  it('reducer returns initial state if typenot matching', () => {
    const initialState = ''
    const state = userIdReducer(initialState, {type: ''})

    expect(initialState).toEqual(state)
  })

  it('reducer for SET_USER_ID', () => {
    let state = ''
    const expectedState = 'userId'
    state = userIdReducer(state, {
      type: SET_USER_ID,
      userId: 'userId'
    })

    expect(state).toEqual(expectedState)
  })
})

describe('reducers for the userMessage', () => {
  it('reducer returns initial state if typenot matching', () => {
    const initialState = Immutable.List()
    const state = userMessagesReducer(initialState, {type: ''})

    expect(initialState).toEqual(state)
  })

  it('reducer for MESSAGE_RECEIVED', () => {
    let state = Immutable.List()
    const expectedState = Immutable.List([
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

    const stateUserMessage = userMessagesReducer(state, {
      type: MESSAGE_RECEIVED,
      message: {
        message: 'messagetext',
        from: 'me',
        to: 'you'
      }
    })

    const stateUserMessageSecond = userMessagesReducer(stateUserMessage, {
      type: MESSAGE_RECEIVED,
      message: {
        message: 'messagetext second',
        from: 'you',
        to: 'me'
      }
    })

    expect(stateUserMessageSecond).toEqual(expectedState)
  })
})
