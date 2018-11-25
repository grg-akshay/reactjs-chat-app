# reactjs-chat-app
Web chat application build in React.

Live Demo: http://reactjs-chat-app.surge.sh

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Functionality
A simple two column layout which has a list of friends on the left column, and chat history and compose box on the right. The application has following functionality:
- Search for a friend and start a chat with him/her.
- Send messages to this friend and see the replies in a typical messaging format.
- Switch between friends and see the appropriate chat history.

### Development
```bash
npm install
npm run start
```

### Tech stack used:
- React.js
- Redux
- Redux Thunk middleware
- WebSocket echo service like https://www.websocket.org/echo.html
- HTML5 
- CSS

### Component architecture

<img width="954" alt="react-chat-component" src="https://user-images.githubusercontent.com/28497360/48979215-5fc53b00-f0dd-11e8-84ab-c5bda5385dcc.PNG">