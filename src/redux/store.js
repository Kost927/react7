import contactsReducers from "./contacts/contactsReducers";

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const middleware = [thunk];

const store = createStore(contactsReducers, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));


export default store;
