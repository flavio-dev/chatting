import Immutable from 'immutable'
import listUsersReducer from '../reducers/listUsers'
import notifyReducer from '../reducers/notify'
import { notify } from 'react-notify-toast';
import { SET_LIST_USERS } from 'app/actions'
import { NEW_USER_LOGIN, DISCONNECTED, CONNECTED } from 'store/actions'

describe('reducers at app level: listUsers under appReducers', () => {
  it('reducer returns initial state if typenot matching', () => {
    const initialState = Immutable.List()
    const state = listUsersReducer(initialState, {type: ''})

    expect(initialState).toEqual(state)
  })

  it('reducer for SET_LIST_USERS', () => {
    const state = Immutable.List()
    const expectedStateSetListUsers = Immutable.List(['userId'])
    const stateSetListUsers = listUsersReducer(state, {
      type: SET_LIST_USERS,
      listUsers: ['userId']
    })

    expect(stateSetListUsers).toEqual(expectedStateSetListUsers)
  })

  it('reducer for NEW_USER_LOGIN', () => {
    const state = Immutable.List()
    const expectedStateSetListUsers = Immutable.List(['userId', 'secondUserId'])
    const stateSetListUsers = listUsersReducer(state, {
      type: NEW_USER_LOGIN,
      userId: 'userId'
    })

    const stateSetListUsersAgain = listUsersReducer(stateSetListUsers, {
      type: NEW_USER_LOGIN,
      userId: 'secondUserId'
    })

    expect(stateSetListUsersAgain).toEqual(expectedStateSetListUsers)
  })
})

describe('reducers at app level: notify under appReducers', () => {
  it('reducer returns initial state if typenot matching', () => {
    const initialState = ''
    const state = notifyReducer(initialState, {type: ''})

    expect(initialState).toEqual(state)
  })

  it('reducer for DISCONNECTED', () => {
    const expectedMessage = 'You are discodancing'
    const state = ''
    notify.show = jest.fn()

    const stateNotify = notifyReducer(state, {
      type: DISCONNECTED,
      message: expectedMessage
    })

    expect(stateNotify).toEqual(expectedMessage)
  })

  it('reducer for NEW_USER_LOGIN', () => {
    const expectedMessage = 'New Login'
    const state = ''
    notify.show = jest.fn()

    const stateNotify = notifyReducer(state, {
      type: NEW_USER_LOGIN,
      message: expectedMessage
    })

    expect(stateNotify).toEqual(expectedMessage)
  })

  it('reducer for CONNECTED', () => {
    const expectedMessage = 'Connected'
    const state = ''
    notify.show = jest.fn()

    const stateNotify = notifyReducer(state, {
      type: CONNECTED,
      message: expectedMessage
    })

    expect(stateNotify).toEqual(expectedMessage)
  })
})
