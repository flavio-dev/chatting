"use strict";

// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = 'chatting';

// Port where we'll run the websocket server
var webSocketsServerPort = Number(process.env.PORT || 4000);

// websocket and http servers
var webSocketServer = require('websocket').server;
var http = require('http');
var https = require('https');

// map of user to connection (useful for when deconnection)
var userConnectionMap = {};
// list of user names
var users = [];

/**
 * HTTP server
 */
var server = http.createServer(function(request, response) {
  if (request.url === '/users/') {
    response.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    response.write(JSON.stringify(users));
    response.end();
  }
});

server.listen(webSocketsServerPort, function() {
	console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});

/**
 * WebSocket server
 */
var wsServer = new webSocketServer({
	// WebSocket server is tied to a HTTP server. WebSocket request is just
	// an enhanced HTTP request. For more info http://tools.ietf.org/html/rfc6455#page-6
	httpServer: server
});

// This callback function is called every time someone
// tries to connect to the WebSocket server
wsServer.on('request', function(request) {
	console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

	var connection = request.accept(null, request.origin);
	// we need to know client index to remove them on 'close' event

	console.log((new Date()) + ' Connection accepted.');

	// user sent some message
	connection.on('message', function(message) {
		if (message.type === 'utf8') {
			console.log((new Date()) + ' Received Parameters: '+ message.utf8Data);
      var msgJSON = JSON.parse(message.utf8Data)


      if (msgJSON.username && msgJSON.username.length) {
        // a username is registering itself
        users.forEach(user => {
          // sending to all usrs someone is loggin in
          const connection = userConnectionMap[user]
          connection.sendUTF(message.utf8Data);
        })
        userConnectionMap[msgJSON.username] = connection
        users.push(msgJSON.username)
      } else {
        if (msgJSON.to === 'ALL') {
          // broadcast message to all connected clients
          users.forEach(user => {
            const connection = userConnectionMap[user]
            connection.sendUTF(message.utf8Data);
          })
        } else {
          // broadcast message only to the user, and myself
          const connectionTo = userConnectionMap[msgJSON.to]
          connectionTo.sendUTF(message.utf8Data);
          const connectionFrom = userConnectionMap[msgJSON.from]
          connectionFrom.sendUTF(message.utf8Data);
        }
      }
		}
	});

	// user disconnected
  // NOT TESTED EITHER =)
	connection.on('close', function(connection, user) {
		console.log((new Date()) + " Peer "
			+ user + " disconnected.");
		// remove user from the list of connected clients
    userConnectionMap[user] = null
		users.splice(users.indexOf(user), 1);
	});
});
