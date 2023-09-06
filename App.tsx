import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './src/redux/reducers';

import {Navigator} from './src/navigator/navigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} />
      <Navigator />
    </Provider>
  );
}

export default App;
