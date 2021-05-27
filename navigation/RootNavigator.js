import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MainStackNavigator, DecksStackNavigator } from "./StackNavigator";


const Tab = createBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Decks" component={MainStackNavigator} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list" color={'#583d72'} size={size} />
                    ),
                }} />
                <Tab.Screen name="NewDeck" component={DecksStackNavigator} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-add-circle-outline" color={'#583d72'} size={size} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigator;