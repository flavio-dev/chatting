export const DISCONNECTED = 'DISCONNECTED'
export const CONNECTING = 'CONNECTING'
export const DISCONNECTING = 'DISCONNECTING'
export const CONNECTED = 'CONNECTED'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
export const SET_CONNECTION = 'SET_CONNECTION'
export const SEND_CHAT_MESSAGE = 'SEND_CHAT_MESSAGE'

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

export const messageReceived = (msg) => ({
  type: MESSAGE_RECEIVED,
  message: {
    message: msg.message,
    from: msg.from,
    to: msg.to
  }
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
