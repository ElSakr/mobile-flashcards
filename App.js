import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { BottomNavigation, Text } from 'react-native-paper';
import Decks from './views/decks'
import NewDeck from './views/newDeck'
import { createAppContainer, createStackNavigator } from 'react-navigation'

const DeckRoute = () => <Decks></Decks>;
const NewDeckRoute = () => <NewDeck></NewDeck>;
const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Article: { screen: Article },
},
  {
    // Specifing Initial Screen
    initalRoute: 'Home'
  }
);
export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'deck', title: 'Decks' },
    { key: 'newDeck', title: 'Add Deck' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    deck: DeckRoute,
    newDeck: NewDeckRoute,
  });

  return (
    <PaperProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider>
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
