import { RECEIVE_DECKS, DELETE_DECKS, ADD_DECK} from './decks'
import { ADD_QUESTION } from './card'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function ADD_DECK(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function DELETE_DECK(deck){
    return {
        type: DELETE_DECK,
        deck,
    }
}

export function ADD_QUESTION(question){
    return{
        type: ADD_DECK,
        question,
    }
}