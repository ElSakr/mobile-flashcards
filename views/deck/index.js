import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const DeckDetails = ({ deck }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Deck DeckDetails</Text>
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


export default DeckDetails;