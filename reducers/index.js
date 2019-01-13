import { RECEIVE_DECKS, DELETE_DECK, ADD_DECK } from '../actions/decks'
import { ADD_QUESTION } from '../actions/card'
import { combineReducers } from 'redux'

function decks(state={}, action){
    switch (action.type){
        case RECEIVE_DECKS:
            debugger
            console.log("RECIEVED...", action)
            console.log("TYPE:", typeof action.decks)
            return {
                ...state,
                ...action.decks,
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
            }
        case DELETE_DECK:
            return Object.assign(
                {}, state, {
                    items: [...state.items.filter(item => item.title != action.id)],
                }
            )
        case ADD_QUESTION:
            const {title, question, answer} = action.params;
            const newQuestions = JSON.parse(JSON.stringify(questions)).concat([ { question, answer } ]);

            return {
                ...state,
                [title]: {...state[title], questions: newQuestions},
            };
        
        default:
            return state

    }
}

export default combineReducers({decks,})