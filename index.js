/**
 * @format
 */
import React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Router from './src';
import { Provider } from 'react-redux';
import store from './src/store/store';

const AppEntry = props => (
    <Provider store={store}>
      <Router {...props} />
    </Provider>
  );
  

AppRegistry.registerComponent(appName, () => AppEntry);
