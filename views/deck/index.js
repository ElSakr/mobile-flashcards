import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, View, } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getDeckById, deleteDeck } from './../../store/actions/decks'
import { Button } from 'react-native-paper';

const DeckDetails = ({ route, navigation }) => {
    const { deckId } = route.params;
    const { currentItem } = useSelector(state => state.decksReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDeckById(deckId))
    }, [deckId]);


    useEffect(() => {
        dispatch(getDeckById(deckId))
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.deck_wrapper}>
                <Text style={styles.main_text}>
                    {currentItem?.title}
                </Text>
                <Text style={styles.sub_text}>
                    {currentItem?.count} Cards
                </Text>
            </View>
            <View >
                {
                    currentItem?.count > 0 &&
                    <Button mode="contained" style={styles.button} onPress={() => {
                        navigation.navigate('Quiz')
                    }}>
                        START QUIZ
            </Button>
                }
                <Button mode="outlined" style={styles.button}
                    onPress={() => {
                        navigation.navigate('newCard', { deckId: currentItem.id })
                    }}
                >
                    ADD NEW CARD

            </Button>
                <Button mode="text" style={styles.button} onPress={() => {
                    dispatch(deleteDeck(currentItem.id))
                    navigation.navigate('Decks')
                }}>
                    DELTE Deck
            </Button>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 100
    },

    deck_wrapper: {
        backgroundColor: "#fff",
        padding: 20,
        minWidth: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main_text: {
        fontSize: 20,
        color: "#583d72",
        fontWeight: 'bold'
    },
    sub_text: {
        fontSize: 15,
        color: "#583d72",

    },
    button: {
        marginTop: 20,
        width: 200,
    }
});


export default DeckDetails;