/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Provider } from 'react-redux';

import store from './src/redux/store';

import AppNavigator from './src/components/AppNavigator'

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
       
          <StatusBar barStyle="dark-content" />
          <AppNavigator />
      
      </Provider>
    );
  }

};

export default App;
