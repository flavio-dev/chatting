import * as actions from '../actions'

describe('actions at app level', () => {
  it('setListUsers should create an action to set a list of users', () => {
    const payload = ['userId']
    const expectedAction = {
      type: actions.SET_LIST_USERS,
      listUsers: payload
    }
    expect(actions.setListUsers(payload)).toEqual(expectedAction)
  })

  it('getInitialListUsers should create an action to retieve some users from server', () => {
    const expectedAction = {
      type: actions.GET_INITIAL_LIST_USERS
    }
    expect(actions.getInitialListUsers()).toEqual(expectedAction)
  })

  it('getConnectionStatus should create an action to retieve the status of the user connection', () => {
    const expectedAction = {
      type: actions.GET_CONNECTION_STATUS
    }
    expect(actions.getStatus()).toEqual(expectedAction)
  })

  it('setConnectionStatus should create an action to set the status of the user connection', () => {
    const expectedAction = {
      type: actions.SET_CONNECTION_STATUS
    }
    expect(actions.setStatus()).toEqual(expectedAction)
  })
})
