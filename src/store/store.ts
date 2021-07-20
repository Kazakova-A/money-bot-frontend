import {
  createStore,
  applyMiddleware,
  PreloadedState,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { persistStore as createPersistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer, { RootState } from './reducers';
import staticSagas from './sagas';

const persistConfig = {
  key: 'root',
  storage,
};

export const history = createBrowserHistory();
export const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState?: PreloadedState<RootState | unknown>) {
  // configure middlewares
  const middlewares = [sagaMiddleware, routerMiddleware];
  // compose enhancers
  const composedEnhancers = compose(composeWithDevTools(applyMiddleware(...middlewares)));

  const persistedReducer = persistReducer(persistConfig, rootReducer(history));
  // create store
  const store = createStore(
    persistedReducer,
    initialState,
    composedEnhancers,
  );
  const persistStore = createPersistStore(store);
  sagaMiddleware.run(staticSagas);
  return { store, persistStore };
}
