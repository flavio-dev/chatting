import {
  connected,
  connecting,
  disconnected,
  messageReceived,
  SET_CONNECTION,
  SEND_CHAT_MESSAGE,
  DISCONNECTING,
  newUserLogin
} from './actions'

const socketMiddleware = (function() {
  var socket = null
  var url = ''
  if (window.location.port.length) {
    url = 'ws:localhost:4000'
  } else {
    var host = window.location.host,
  		protocol = (window.location.protocol === 'https:') ? 'wss:' : 'ws:';

    url = protocol + host
  }

  const onOpen = (ws, store, userId) => evt => {
    // Send a handshake, or authenticate with remote end
    // Tell the store we're connected
    store.dispatch(connected(userId, 'You are now connected'))
    // Tell the server who we are
    socket.send(JSON.stringify({username: userId}))
  }

  const onClose = (ws, store) => evt => {
    // Tell the store we've disconnected
    store.dispatch(disconnected('You just got disconnected...'))
  }

  const onMessage = (ws, store) => evt => {
    // Parse the JSON message received on the websocket
    var msg = JSON.parse(evt.data)
    // Dispatch an action that adds the received message to our state
    if (msg.message && msg.message.length) {
      store.dispatch(messageReceived(msg))
    } else if (msg.username && msg.username.length) {
      store.dispatch(newUserLogin(msg, 'Hey, ' + msg.username + ' just arrived online'))
    }
  }

  return store => next => action => {
    switch (action.type) {
      // The user wants us to connect
      case SET_CONNECTION:
        // Start a new connection to the server
        if (socket !== null) {
          socket.close()
        }
        // Send an action that shows a 'connecting...' status for now
        store.dispatch(connecting())

        // Attempt to connect (we could send a 'failed' action on error)
        socket = new WebSocket(url)
        socket.onclose = onClose(socket, store)
        socket.onopen = onOpen(socket, store, action.userId)
        socket.onmessage = onMessage(socket, store)
        return socket

      // The user wants us to disconnect
      case DISCONNECTING:
        if (socket !== null) {
          socket.close(1000, action.userId)
        }
        socket = null

        store.dispatch(disconnected('You are loging out...'))
        return socket

      case SEND_CHAT_MESSAGE:
        socket.send(JSON.stringify(action))
        return true

      // This action is irrelevant to us, pass it on to the next middleware
      default:
        return next(action)
    }
  }
})()

export default socketMiddleware
