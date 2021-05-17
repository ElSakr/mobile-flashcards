import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
// import { AsyncStorage } from '@react-native-community/async-storage';

const NewDeck = () => {
    const [text, setText] = React.useState('');
    // const _retrieveData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('decks');
    //         if (value !== null) {
    //             // We have data!!
    //             console.log(value);
    //         }
    //     } catch (error) {
    //         // Error retrieving data
    //         console.log('error');

    //     }
    // };

    // useEffect(() => {
    //     _retrieveData()
    // }, [])
    return (
        <View style={styles.container}>
            <Text style={styles?.deckTitle}>What is the title of your new deck? </Text>
            <TextInput
                style={styles?.deckInput}
                label="New Deck"
                value={text}
                onChangeText={text => setText(text)}

            />
            <Button mode="contained" onPress={() => console.log('Pressed')}>
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