import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Deck = ({ data }) => {
    return (
        <Card style={styles.cardStyle}>
            <Card.Content>
                <Title>{data?.title}</Title>
                <Paragraph>{data?.count}</Paragraph>
            </Card.Content>
        </Card>
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
    cardStyle: {
        marginBottom: 20,
    }
});

export default Deck;
