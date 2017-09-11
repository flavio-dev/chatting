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
})
