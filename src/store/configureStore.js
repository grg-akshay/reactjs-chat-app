import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { messageReducer } from '../reducers/messages';
import setupSocket from '../socket/configureSocket';

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
* setupStore creates a redux store along with applying a thunk middleware-- with custom dependency- send
* The websocket is initialised(established a connection to server) at the time of store creation,
* and then only messages can be sent/received.
*/

const setupStore = () => {

  return setupSocket().then(({ send, receive }) => {
    const store = createStore(
      messageReducer,
      composeEnhancers(applyMiddleware(thunkMiddleware.withExtraArgument( send ))),
    );

    receive(store.dispatch);
    return store;
  });
};

export default setupStore;