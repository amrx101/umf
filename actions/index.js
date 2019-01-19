import { RECEIVE_DECKS, DELETE_DECK, ADD_DECK} from './decks'
import { ADD_QUESTION } from './card'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function deleteDeck(id){
    return {
        type: DELETE_DECK,
        id,
    }
}

export function addQuestion(params){
    return{
        type: ADD_QUESTION,
        params,
    }
}