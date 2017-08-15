import * as actions from './actions'

describe('action messageReceived', () => {
  it('should create an action to describe a received message', () => {
    const payload = {
      message: 'the message',
      from: 'from',
      to: 'to'
    }
    const expectedAction = {
      type: actions.MESSAGE_RECEIVED,
      message: {
        message: payload.message,
        from: payload.from,
        to: payload.to
      }
    }
    expect(actions.messageReceived(payload)).toEqual(expectedAction)
  })
})

describe('action newUserLogin', () => {
  it('should create an action to notify a new user just connected', () => {
    const payload = {
      username: 'username'
    }
    const expectedAction = {
      type: actions.NEW_USER_LOGIN,
      userId: payload.username
    }
    expect(actions.newUserLogin(payload)).toEqual(expectedAction)
  })
})

describe('action setConnection', () => {
  it('should create an action to start up the connection with websocket', () => {
    const userId = 'username'

    const expectedAction = {
      type: actions.SET_CONNECTION,
      userId
    }
    expect(actions.setConnection(userId)).toEqual(expectedAction)
  })
})

describe('action sendMessage', () => {
  it('should create an action to send a message to the websocket and the world', () => {
    const message = 'the message'
    const from = 'me'
    const to = 'someone'

    const expectedAction = {
      type: actions.SEND_CHAT_MESSAGE,
      message,
      from,
      to
    }
    expect(actions.sendMessage(message, from, to)).toEqual(expectedAction)
  })
})
