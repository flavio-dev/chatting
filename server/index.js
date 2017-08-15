const express = require('express');
const path = require('path');
const app = express();
const expressWs = require('express-ws')(app);

// Priority serve any static files.
const PORT = Number(process.env.PORT || 4000);
// map of user to connection (useful for when deconnection)
var userConnectionMap = {};
// list of user names
var users = [];

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/users', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.send(JSON.stringify(users));
});

app.ws('/', function(ws, req) {
  ws.on('message', function(msgPassed) {
    const msgJSON = JSON.parse(msgPassed)
		console.log((new Date()) + ' Received Parameters: '+ msgPassed);

    if (msgJSON.username && msgJSON.username.length) {
      // a username is registering itself
      // sending to all usrs someone is loggin in
      users.forEach(user => {
        const connection = userConnectionMap[user]
        connection.send(msgPassed);
      })

      userConnectionMap[msgJSON.username] = ws
      users.push(msgJSON.username)
    } else {
      if (msgJSON.to === 'ALL') {
        // broadcast message to all connected clients
        users.forEach(user => {
          const connection = userConnectionMap[user]
          connection.send(msgPassed);
        })
      } else {
        // broadcast message only to the user, and myself
        const connectionTo = userConnectionMap[msgJSON.to]
        connectionTo.send(msgPassed);
        const connectionFrom = userConnectionMap[msgJSON.from]
        connectionFrom.send(msgPassed);
      }
    }
  });

  ws.on('close', function(connection, user) {
    console.log((new Date()) + " Peer "
			+ user + " disconnected.");
		// remove user from the list of connected clients
    userConnectionMap[user] = null
		users.splice(users.indexOf(user), 1);
  });

  console.log('socket', req.testing);
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
