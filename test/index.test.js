var expect  = require('chai').expect
var request = require('request')

describe('Test of the server NodeJS', () => {
  var url = 'http://localhost:4000/users'

  it('returns status 200', function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })

  it('returns initial empty list of users', function(done) {
    request(url, function(error, response, body) {
      expect(body).to.equal('[]')
      done()
    })
  })

  // it('adds a user when message passed with userId', (done) => {
  //   var WebSocketClient = require('websocket').client
  //   const socket = new WebSocketClient()
  //   console.log('before', socket)
  //   socket.connect('ws:localhost:4000')
  //   socket.addEventListener()
  //   console.log('after', socket)
  //   webSocketConnection.sendUTF('user')
  // })
})
