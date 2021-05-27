
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import Decks from './../views/decks';
import NewDeck from './../views/newDeck';
import DeckDetails from './../views/deck';
import Quiz from './../views/quiz';
import NewCard from './../views/newCard';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#583d72",
            },
            headerTintColor: "#fefecc",
            headerBackTitle: "Back",
        }}>
            <Stack.Screen name="Decks" component={Decks} options={{ title: 'Decks List' }} />
            <Stack.Screen name="DeckDetails" component={DeckDetails} options={{ title: 'Deck Details' }} />
            <Stack.Screen name="Quiz" component={Quiz} options={{ title: 'Quiz' }} />
            <Stack.Screen name="newCard" component={NewCard} options={{ title: 'New Card' }} />
        </Stack.Navigator>
    );
}

const DecksStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#583d72",
            },
            headerTintColor: "#fefecc",
            headerBackTitle: "Back",
        }}>
            <Stack.Screen name="NewDeck" component={NewDeck} options={{ title: 'New Deck' }} />

        </Stack.Navigator>
    );
}

export { MainStackNavigator, DecksStackNavigator };