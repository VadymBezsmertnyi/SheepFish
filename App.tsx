import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './src/redux/reducers';

function App(): JSX.Element {
  const store = configureStore({
    reducer: rootReducer,
  });
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>TEST</Text>
        <StatusBar barStyle={'dark-content'} />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
