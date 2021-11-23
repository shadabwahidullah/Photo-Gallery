import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import collectionsReducer from './reducers/collections';

const reducer = combineReducers({
  collectionsReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
