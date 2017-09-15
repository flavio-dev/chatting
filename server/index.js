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

const garbageCollector = () => {
  users = users.filter((user) => {
    const userSlug = makeSlug(user)
    if (!userConnectionMap[userSlug].connection || userConnectionMap[userSlug].connection.readyState > 1) {
      delete userConnectionMap[userSlug].connection
    } else {
      return user
    }
  })
}

const interval = setInterval(() => {
  garbageCollector()
}, 5000);

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
  // ws.on('open', function open(msg) {
  //   console.log('ON OPEN');
  //   if (users.indexOf(msgJSON.username) > -1) {
  //     console.log('hey are we entering here becasue user alreadyt exists')
  //     //// TODO
  //     ws.send('ERROR');
  //     return
  //   }
  // });

  ws.on('message', function(msgPassed) {
    const msgJSON = JSON.parse(msgPassed)
		console.log((new Date()) + ' Received Parameters: '+ msgPassed);

    if (msgJSON.username && msgJSON.username.length) {
      const userSlug = makeSlug(msgJSON.username)
      if (users.indexOf(msgJSON.username) > -1) {
        console.log('hey are we entering here')
        //// TODO
        ws.send(JSON.stringify({
          error: 'Sorry buddy'
        }));
        ws.close()
        return
      } else {
        ws.send(JSON.stringify({
          connectionAccepted: userSlug
        }));
      }

      // a username is registering itself
      // sending to all users someone is loggin in
      users.forEach(user => {
        const userSlug = makeSlug(user)
        const connection = userConnectionMap[userSlug];
        if (connection && connection.readyState === 1) {
          connection.send(msgPassed);
        }
      })

      // registering the user
      userConnectionMap[userSlug] = {
        connection: ws,
        hasLogged: true
      };
      users.push(msgJSON.username);
    } else {
      if (msgJSON.to === 'ALL') {
        // broadcast message to all connected clients
        users.forEach(user => {
          const userSlug = makeSlug(user)
          const connection = userConnectionMap[userSlug].connection
          if (connection && connection.readyState === 1) {
            connection.send(msgPassed);
          }
        })
      } else {
        // broadcast message only to the user, and myself
        const userToSlug = makeSlug(msgJSON.to)
        const userFromSlug = makeSlug(msgJSON.from)

        const connectionTo = userConnectionMap[userToSlug].connection
        if (connectionTo && connectionTo.readyState === 1) {
          connectionTo.send(msgPassed);
        }
        const connectionFrom = userConnectionMap[userFromSlug].connection
        if (connectionFrom && connectionFrom.readyState === 1) {
          connectionFrom.send(msgPassed);
        }
      }
    }
  });

  ws.on('close', function(connection, user) {
    console.log((new Date()) + " Peer "
			+ user + " disconnected.");
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
