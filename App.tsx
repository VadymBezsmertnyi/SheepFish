import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './src/redux/reducers';

import {Navigator} from './src/navigator/navigator';

function App(): JSX.Element {
  const store = configureStore({
    reducer: rootReducer,
  });
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} />
      <Navigator />
    </Provider>
  );
}

export default App;
