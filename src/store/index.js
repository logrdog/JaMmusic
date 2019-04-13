
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import appState from './reducers';


const store = {
  name: 'Web JAM LLC',
  menu: '',
  fullMenu: true,
  role: '',
  widescreen: true
};


export default createStore(appState, store, applyMiddleware(logger));