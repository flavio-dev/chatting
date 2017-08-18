# Chatting

In this document I will explain how I approached this task, the interesting discoveries, the difficulties I encountered and how to make this project better.

## Approach

I decided to start with the tech I am working with in my current position: React. I started with the create react app that I ejected so I could add my extra bits. So I added libs such as Redux for state management, Router to help delivering pages through URLs (quite practical for the `/username` approach), Immutable to avoid mutable states and Reselect for the memoized selectors. I also touched the Webkit conf to have CSS Modules, SASS support and path control.

For the styling I used SCSS.

For the server I wanted something quite simple and went for a WebSocket service in Node.

For the tests, I used Jest and Enzyme.


## Interesting bits

I think the code challenge at home is the best approach to find out the level of someone. This is under your time control, with the tools of your choice. So I always like doing them, also because you learn a few things on the way. For me this time it was test. The FE codebase at work doesn't have tests (tiny bit in Chai.js) and I wanted to implement some for quite some time. This is therefore the first time I play with Jest (which I heard quite a lot of at the React Conf in London earlier this year, when I realised it was much more mature then when it came out) and Enzyme (that I discovered as I was looking for a specific approach for a test and Jest wasn't just the tool for it).

Something else that was interesting and challenging: the 'server'. I don't touch much that side of things in my day to day job but did a little bit at home on some personal projects. I was not really impressed by the code I wrote on that server file so I removed a good chunk of it and simplified it drastically. I realised I wanted something very flexible with some form of push notifications to clients for maintainability of current state of who's online and who's not... but kinda failed and became quite complex to maintain so at the end I kept the nice push messages bits and implemented a garbage collector (and let the FE doing pollings for state control).

I did like working on the project and was thinking keeping it featured on my GitHub potentially (if that's ok with you) and therefore I wanted everything working to perfection but time was lacking to do something proper. I would have started with something simplier if I'd have to do it again. I also changed and integrated express and express-ws for the Node server like half way through, which I had never used before.


## Difficulties

As much interesting it was to finally type some tests for React, I ended up struggling at times on a few of them (which you won't have any problem to spot =) ) due to lack of experience in the matter. This was also why I unfortunately didn't apply TDD. Understanding the logic behind the different types of tests (sagas, reducers, actions....) took me a bit of reading and I thought it would help me to see how to write them with proper example...: my code. Also realised how the community was still debating on certain points, for instance [regarding testing against succession of events vs testing the impact on a mocked store](https://github.com/redux-saga/redux-saga/issues/518).


## Improvements

I think there are a few adjustments and features that could complete this chat room. My ideal conclusion would have been a chat with (proper) push functionalities, user management (name clashing, connections), proper flow from connecting to disconnecting (view updates accordingly etc...), the logout button in display only when you are connected, visual/sound effect on messages, history management (which I would have done between local storage and server side recovery)... However, as there is a state, you can login with a name, type stuff on the forum, logout then login again and the messages should be still there.
The management of the messages could also be very much optimised. I use a single source of truth when it comes to messages, which means a lot of filtering. This is quite inefficient as the project became from 2 people talking to multiple talking, then to a chat group etc... message queues per conversion would have been a lot better.


## Conclusion

Was great to work on this little project. I would like to continue to improve it. I also started another personal project few weeks back (toying with the mixcloud api) which I think I would approach in a better way thanks to the experience gained with this challenge.
It also gave me a little bit more confidence on (finally!) starting to implement some Jest tests.

I am sorry it took a bit more time (holidays and very busy days at work). To run the project:

into root for server:
`yarn`
`yarn start`

then `cd react-ui`
`yarn`
`yarn run start`

to run tests: `yarn run test`

Any question don't hesitate to contact me!

Cheers,

F

Oh, [the app runs on heroku](chatting-aff.herokuapp.com) if you want.
