import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import { StyleSheet, SafeAreaView,FlatList, Text, ScrollView, View} from 'react-native';
import Deck from './../../components/deck'
import { useEffect } from 'react/cjs/react.development';

const Decks = ({navigation}) => {
    const { decks } = useSelector(state => state.decksReducer);
    console.log("updated decks", decks)

    const [decksList ,setDecksList] = useState(decks)

   
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.headline}>Decks List</Text>
           { decksList.length !== 0 ? (
            <FlatList
                style={styles.scrollView}
                data={decksList}
                extraData={item => item.id.toString()}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Deck navigation={navigation} data={item} key={item?.id} />
                )}
            />
              ) : (
            <Text  style={styles.scrollView}>You list is empty : '(</Text>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 100
    },
    scrollView: {
        marginHorizontal: 20,
    },
    headline: {
        fontSize: 25,
        color: "#583d72",
        fontWeight: 'bold',
        paddingHorizontal: 25,
        marginBottom: 20,
    }
});


export default Decks;