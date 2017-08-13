import {
  connected,
  connecting,
  disconnected,
  messageReceived,
  SET_CONNECTION,
  SEND_CHAT_MESSAGE,
  DISCONNECTING
} from './actions'

const socketMiddleware = (function() {
  var socket = null
  var url = 'ws:localhost:4000'

  const onOpen = (ws, store, userId) => evt => {
    // Send a handshake, or authenticate with remote end
    // Tell the store we're connected
    store.dispatch(connected())
    // Tell the server who we are
    socket.send(JSON.stringify({username: userId}))
  }

  const onClose = (ws, store) => evt => {
    // Tell the store we've disconnected
    store.dispatch(disconnected())
  }

  const onMessage = (ws, store) => evt => {
    // Parse the JSON message received on the websocket
    var msg = JSON.parse(evt.data)
    // Dispatch an action that adds the received message to our state
    store.dispatch(messageReceived(msg))
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

        return true

      // The user wants us to disconnect
      case DISCONNECTING:
        if (socket !== null) {
          socket.close(1000, action.userId)
        }
        socket = null

        // Set our state to disconnected
        store.dispatch(disconnected())
        return true

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
