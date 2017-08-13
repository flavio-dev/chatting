export const DISCONNECTED = 'DISCONNECTED'
export const CONNECTING = 'CONNECTING'
export const DISCONNECTING = 'DISCONNECTING'
export const CONNECTED = 'CONNECTED'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
export const SET_CONNECTION = 'SET_CONNECTION'
export const SEND_CHAT_MESSAGE = 'SEND_CHAT_MESSAGE'
export const NEW_USER_LOGIN = 'NEW_USER_LOGIN'

export const connected = () => ({
  type: CONNECTED,
  status: 'connected'
})

export const connecting = () => ({
  type: CONNECTING,
  status: 'connecting'
})

export const disconnected = () => ({
  type: DISCONNECTED,
  status: 'disconnected'
})

export const messageReceived = (payload) => ({
  type: MESSAGE_RECEIVED,
  message: {
    message: payload.message,
    from: payload.from,
    to: payload.to
  }
})

export const newUserLogin = (payload) => ({
  type: NEW_USER_LOGIN,
  userId: payload.username
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
