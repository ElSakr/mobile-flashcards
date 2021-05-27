import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigator from './navigation/RootNavigator';
import { StyleSheet } from 'react-native';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
