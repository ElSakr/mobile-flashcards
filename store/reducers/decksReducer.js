import { GET_DECKS, ADD_NEW_DECK, GET_DECK_BY_ID, ADD_NEW_CARD, DELETE_DECK } from '../types';
import { DECKS_INITIAL_STATE } from './../../utlis/constants'
const initialState = {
    decks: DECKS_INITIAL_STATE
};

const decksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DECKS:
            action.payload ?
                { ...state, decks: action.payload } : { state };


        case ADD_NEW_DECK:
            if (action.payload) {
                return {
                    ...state, decks: [...state?.decks, action.payload]
                }
            } else { return state }

        case GET_DECK_BY_ID:
            if (action.payload) {
                return {
                    ...state, currentItem: state.decks.find(item => item.id === action?.payload)
                }
            } else { return state }

        case DELETE_DECK:
            if (action.payload) {
                console.log(...state.decks.filter(item => item.id !== action.payload))
                return {
                    ...state, decks: state.decks.filter(item => item.id !== action.payload)
                }
            } else { return state }

        case ADD_NEW_CARD:
            const currentDeck = state.decks.find(item => item.id === action?.payload?.deckId)
            currentDeck.questions = [...currentDeck.questions, action.payload?.card]
            currentDeck.count = currentDeck.questions.length > 0 ? currentDeck.questions.length : 0
            return {
                ...state,
                decks: state.decks.map(deck => (deck.id === action.payload.deckId) ? currentDeck : deck),
            };
        default:
            return state;
    }
}
export default decksReducer;