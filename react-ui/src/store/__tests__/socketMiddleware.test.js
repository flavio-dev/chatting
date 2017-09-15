import configureStore from 'redux-mock-store'
import { push } from 'react-router-redux'
import { Server, WebSocket } from 'mock-socket';
import socketMiddleware from '../socketMiddleware'
import { setConnection, connecting, disconnecting, disconnected, sendMessage } from '../actions'

const middlewares = [socketMiddleware]
const mockStore = configureStore(middlewares)

describe('socketMiddleware test suite', () => {
  let initialState
  let store
  let mockServer

  beforeEach(() => {
    initialState = {}
    store = mockStore(initialState)
  })

  beforeAll(() => {
    mockServer = new Server('ws://localhost:4000')
  })

  afterAll((done) => {
    mockServer.stop(done)
  })

  it('should dispatch connecting when SET_CONNECTION action is triggered', (done) => {
    const ws = store.dispatch(setConnection('userId'))

    const listeners = ws.listeners
    expect(listeners.close).toBeDefined()
    expect(listeners.open).toBeDefined()
    expect(listeners.message).toBeDefined()

    const actions = store.getActions()
    const expectedPayload = connecting()
    expect(actions).toEqual([expectedPayload])
    done();
  })

  it('should dispatch disconnected when DISCONNECTING action is triggered', (done) => {
    const ws = store.dispatch(disconnecting())

    const actions = store.getActions()
    expect(actions.length).toBe(2)
    const expectedPayload = disconnected('You are logging out...')
    const expectedSecondPayload = push('/')

    expect(actions).toEqual([expectedPayload, expectedSecondPayload])
    expect(ws).toBe(null)
    done();
  })

  it('should send a message when SEND_CHAT_MESSAGE action is triggered', (done) => {
    mockServer.on('message', () => {
      console.log('I would like to receive here the socket.send result');
    })
    // have to call this to initialise the websocket
    store.dispatch(setConnection('userId'))

    store.dispatch(sendMessage())
    done();
  })

  it('should send a username message to server', (done) => {
    mockServer.on('message', () => {
      console.log('this is the OPEN');

    })
    // have to call this to initialise the websocket
    const ws = store.dispatch(setConnection('userId'))
    // console.log('balblblabla ws = ', ws);
    // Test if mock server receive the message sent by socket client onOpen
    // OTHER Test if mock server receive the message sent by socket client onMessage
    // -- here we would test the various mesages individually to check if dispatch are being called

    // ANOTHER OTHER Test if mock server dispatches a dicsonned onClose action from ws server

    done();

    // const chatSocket = new WebSocket('ws://localhost:4000');
    //
    // chatSocket.onopen = (event) => {
    //   console.log('event on open: ', event);
    // }
    //
    // chatSocket.onmessage = (event) => {
    //   console.log('event on onmessage: ', event);
    // }
  })
})
