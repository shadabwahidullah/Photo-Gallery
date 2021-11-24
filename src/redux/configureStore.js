import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import collectionsReducer from './reducers/collections';
import collectionReducer from './reducers/collection';

const reducer = combineReducers({
  collectionsReducer,
  collectionReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
