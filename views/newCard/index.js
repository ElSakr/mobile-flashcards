import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { addNewCard } from './../../store/actions/decks'

const NewCard = ({ navigation, route }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const { deckId } = route.params;

    const dispatch = useDispatch();
    const addNew = () => {
        dispatch(addNewCard(
            {
                deckId: deckId,
                card: {
                    id: `${deckId}_quiz_qu_${question}`,
                    question,
                    answer
                }
            }
        ));
        navigation.goBack()
    }


    return (
        <View style={styles.container}>
            <Text style={styles?.deckTitle}>Add new </Text>
            <Text style={styles?.deckSubTitle}>Add a new card to the deck of flashcards </Text>
            <TextInput
                style={styles?.deckInput}
                label="Question"
                value={question}
                onChangeText={text => setQuestion(text)}

            />
            <TextInput
                style={styles?.deckInput}
                label="Answer"
                value={answer}
                onChangeText={text => setAnswer(text)}

            />
            <Button mode="contained" onPress={() => addNew()}>
                Add Card
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20
    },
    deckTitle: {
        marginBottom: 20,
        fontSize: 20
    },
    deckSubTitle: {
        marginBottom: 20,
        fontSize: 15
    },
    deckInput: {
        marginBottom: 20,
    }
});


export default NewCard;