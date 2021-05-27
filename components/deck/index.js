import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Deck = ({ data, navigation }) => {
    return (
        <Card style={styles.cardStyle} onPress={() => {
            navigation.navigate('DeckDetails', {
                deckId: data?.id
            })
        }}>
            <Card.Content>
                <Title style={styles.text}>{data?.title}</Title>
                <Paragraph style={styles.text}>{data?.count} Flashcards</Paragraph>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardStyle: {
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    text: {
        color: "#583d72"
    }
});

export default Deck;
