import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { addNewDeck } from './../../store/actions/decks'

const NewDeck = ({ navigation }) => {
    const [text, setText] = React.useState('');

    const dispatch = useDispatch();
    const addNew = () => {
        dispatch(addNewDeck({
            id: `deck_${text}`,
            title: text,
            count: 0,
            questions: []
        }))
        navigation.navigate('Decks')
    }

    return (
        <View style={styles.container}>
            <Text style={styles?.deckTitle}>What is the title of your new deck? </Text>
            <TextInput
                style={styles?.deckInput}
                label="New Deck"
                value={text}
                onChangeText={text => setText(text)}

            />
            <Button mode="contained" onPress={() => addNew()}>
                Add New
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
    },
    deckInput: {
        marginBottom: 20,
    }
});


export default NewDeck;