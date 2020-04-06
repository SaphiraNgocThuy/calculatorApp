import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer, { initialState } from './src/reducer';
import Screen from './src/Screen';

const store = createStore(reducer, initialState);

export default function App() {
  return (
    <Provider {...{ store }}>
      <Screen />
    </Provider>
  );
}
