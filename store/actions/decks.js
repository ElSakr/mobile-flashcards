import { GET_DECKS, ADD_NEW_DECK, GET_DECK_BY_ID, ADD_NEW_CARD, DELETE_DECK } from './../types';
export const getDecks = (payload) => {
    return {
        type: GET_DECKS,
        payload
    }

}

export const getDeckById = (payload) => {
    return {
        type: GET_DECK_BY_ID,
        payload
    }

}

export const addNewDeck = (payload) => {
    return {
        type: ADD_NEW_DECK,
        payload
    }
}

export const deleteDeck = (payload) => {
    return {
        type: DELETE_DECK,
        payload
    }
}

export const addNewCard = (payload) => {
    return {
        type: ADD_NEW_CARD,
        payload
    }
}
