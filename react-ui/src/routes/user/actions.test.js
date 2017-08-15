import * as actions from './actions'

describe('action setUserId', () => {
  it('should create an action to set a user id', () => {
    const userId = 'Someone'
    const expectedAction = {
      type: actions.SET_USER_ID,
      userId
    }
    expect(actions.setUserId(userId)).toEqual(expectedAction)
  })
})
