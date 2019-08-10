import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import storageSession from 'redux-persist/lib/storage/session';
import allReducers from '../redux/allReducers';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};
let mWares = applyMiddleware(thunk);
/* istanbul ignore if */
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ predicate: (getState, action) => action.type !== 'SC_HEARTBEAT' });
  mWares = applyMiddleware(thunk, logger);
}
const persistedReducer = persistReducer(persistConfig, allReducers);
const store = createStore(persistedReducer, mWares);
const persistor = persistStore(store);
export default { store, persistor };
