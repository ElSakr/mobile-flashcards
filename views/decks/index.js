import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// import { AsyncStorage } from '@react-native-community/async-storage';

import Deck from './../../components/deck'
const Decks = () => {
    const decksList = [
        {
            id: 'deck1',
            title: 'Deck 1',
            count: '3'
        },
        {
            id: 'deck2',
            title: 'Deck 2',
            count: '2'
        },
        {
            id: 'deck3',
            title: 'Deck 3',
            count: '5'
        }

    ]

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {decksList && decksList.map((deck, index) => (
                    <Deck data={deck} key={index} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 100
    },
    scrollView: {
        marginHorizontal: 20,
    },
});


export default Decks;