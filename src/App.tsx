import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import { configureStore, history } from './store/store';
import RouterMap from './routes/router';

const configuredStore = configureStore();

const App: React.FC = () => (
  <Provider store={configuredStore.store}>
    <PersistGate loading={null} persistor={configuredStore.persistStore}>
      <ConnectedRouter history={history}>
        <RouterMap />
      </ConnectedRouter>
    </PersistGate>

  </Provider>
);

export default memo(App);
