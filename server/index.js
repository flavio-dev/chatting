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

const makeSlug = (userId) => userId.replace(/\s+/g, '').toLowerCase();
const clearUser = (userSlug) => {
  console.log('clearUser ', userSlug);
  console.log('in users?= ', users);
  delete userConnectionMap[userSlug]
  const index = users.indexOf(userSlug)
  if (index > -1) {
    users.splice(index, 1);
  }
}

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
      const userSlug = makeSlug(msgJSON.username)
      if (users.indexOf(userSlug) > -1) {
        // if user exists already let's not add it and close the connection
        if (ws && ws.readyState === 1) {
          ws.send('{"action": "disconnecting"}')
          ws.close();
        } else if (ws && ws.readyState > 1) {
          clearUser(userSlug)
        }
        return
      }

      // a username is registering itself
      // sending to all users someone is loggin in
      users.forEach(user => {
        const connection = userConnectionMap[user];
        if (connection && connection.readyState === 1) {
          connection.send(msgPassed);
        } else if (connection && connection.readyState > 1) {
          clearUser(user)
        }
      })

      // registering the user
      userConnectionMap[userSlug] = ws;
      users.push(userSlug);
    } else {
      if (msgJSON.to === 'ALL') {
        // broadcast message to all connected clients
        users.forEach(user => {
          const connection = userConnectionMap[user]
          if (connection && connection.readyState === 1) {
            connection.send(msgPassed);
          } else if (connection && connection.readyState > 1) {
            clearUser(user)
          }
        })
      } else {
        // broadcast message only to the user, and myself
        const userToSlug = makeSlug(msgJSON.to)
        const userFromSlug = makeSlug(msgJSON.from)

        const connectionTo = userConnectionMap[msgJSON.to]
        if (connectionTo && connectionTo.readyState === 1) {
          connectionTo.send(msgPassed);
        } else if (connectionTo && connectionTo.readyState > 1) {
          clearUser(userToSlug)
        }
        const connectionFrom = userConnectionMap[msgJSON.from]
        if (connectionFrom && connectionFrom.readyState === 1) {
          connectionFrom.send(msgPassed);
        } else if (connectionFrom && connectionFrom.readyState > 1) {
          clearUser(userFromSlug)
        }
      }
    }
  });

  ws.on('close', function(connection, user) {
    console.log((new Date()) + " Peer "
			+ user + " disconnected.");
		// remove user from the list of connected clients
    const userSlug = makeSlug(user)
    clearUser(userSlug)
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
