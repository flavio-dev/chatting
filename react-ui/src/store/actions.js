export const DISCONNECTED = 'DISCONNECTED'
export const CONNECTING = 'CONNECTING'
export const DISCONNECTING = 'DISCONNECTING'
export const CONNECTED = 'CONNECTED'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
export const SET_CONNECTION = 'SET_CONNECTION'
export const SEND_CHAT_MESSAGE = 'SEND_CHAT_MESSAGE'
export const NEW_USER_LOGIN = 'NEW_USER_LOGIN'

export const connected = (userId, message) => ({
  type: CONNECTED,
  status: 'connected',
  message,
  userId
})

export const connecting = () => ({
  type: CONNECTING,
  status: 'connecting'
})

export const disconnecting = () => ({
  type: DISCONNECTING,
  status: 'disconnecting'
})

export const disconnected = (message) => ({
  type: DISCONNECTED,
  status: 'disconnected',
  message,
})

export const messageReceived = (payload) => ({
  type: MESSAGE_RECEIVED,
  message: {
    message: payload.message,
    from: payload.from,
    to: payload.to
  }
})

export const newUserLogin = (payload, message) => ({
  type: NEW_USER_LOGIN,
  userId: payload.username,
  message
})

export const setConnection = (userId) => {
  return {
    type: SET_CONNECTION,
    userId
  }
}

export const sendMessage = (message, from, to) => {
  return {
    type: SEND_CHAT_MESSAGE,
    message,
    from,
    to
  }
}
