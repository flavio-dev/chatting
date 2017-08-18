# Chatting

In this document I will explain how I approached this task, the interesting discoveries, the difficulties I encountered and how to make this project better.

## Approach

I decided to start with the tech I am working with in my current position: React. I started with the create react app that I ejected so I could add my extra bits. So I added libs such as Redux for state management, Router to help delivering pages through URLs (quite practical for the `/username` approach), Immutable to avoid mutable state and Reselect for the memoized selectors. I also touched the Webkit conf to have CSS Modules, SASS support and path control.
For the styling I used SCSS.
For the server I wanted something quite simple and went for a WebSocket service in Node.
For the tests, I used Jest and Enzyme.


## Interesting bits

I think the code challenge at home is the best approach to find out the level of someone. This is under your time control, with the tools of your choice. So I always like doing them, also because you learn a few things on the way. For me this time it was test. The codebase for FE doesn't have tests and I wanted to implement some for quite some time. This is therefore the first time I touch at Jest (which I heard quite a lot and realised it was mature enough at the React Conf in London earlier this year) and Enzyme. Other interesting and challenging bits were the server. I don't touch much that part of code in my day to day job but did a little bit at home on some perso projects. I am not super impressed by the code on that server file, realising I wanted something very flexible with some form of push notifications to clients for maintainability of current state of who's online and who's not... kinda failed and became quite complexe to maintain and realised at the end I just went too far and drifted away from the scope. I did like working on the project and was thinking keeping it featuring on my GitHub potentially if you let me do it and therefore I wanted everything working to perfection but time was lacking to do something proper. I would have done something simplier if I'd have to do it again. I also changed and integrated express and express-ws which I never used before.


## Difficulties

As much interesting it was to finally type some tests for React, I ended up struggling at times on certain tests due to lack of experience in the matter. This was also why I unfortunately didn't apply TDD. Understanding the logic behind the different types of tests (sagas, reducers, actions....) took me a bit of reading and I thought it would help me to see how to write them with proper example of what to test in my code. Also realised how the community was still debating on certain points, for instance [https://github.com/redux-saga/redux-saga/issues/518](regarding testing against succession of events vs impact on a mocked store).


## Improvements

I am happy to present you this challenge but also frustrated to not have been able to complete it a bit more on the logic of things. My ideal conclusion would have been a chat with (proper) push functionalities, user management (name clashing, connections), proper flow between connecting to disconnecting (view updating accordingly etc...), the logout button in display only when you are connected, visual/sound effect on messages, history management (which I would have done between local storage and server side recovery)...
The management of the messages could also be very much optimised. I use a single source of truth when it comes to messages, which means a lot of filtering. This is quite inefficient as the project became from 2 people talking to multiple talking to a chat group etc... message queues per conversion would have been a lot better.


## Conclusion

Was great to work on this little project. I would like to continue to improve it. I also started another personal project few weeks back (playing around the mixcloud api) which I think I would approach in a better way thanks to the experience gained with this challenge.
I will also try to (finally!) implement some Jest tests into my codebase at work.

I am sorry it took a bit more time (holidays and very busy days at work). To run the project:

into root:
`yarn`
`yarn start`

then `cd react-ui`
`yarn`
`yarn run start`

to run tests: `yarn run test`

Any question don't hesitate to contact me!

Cheers,

F
