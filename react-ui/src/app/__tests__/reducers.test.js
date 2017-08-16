import Immutable from 'immutable'
import listUsersReducer from '../reducers'
import { SET_LIST_USERS } from 'app/actions'
import { NEW_USER_LOGIN } from 'store/actions'

describe('reducers at app level', () => {
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
      listUsersReducer: ['userId']
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
