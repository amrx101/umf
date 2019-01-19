import {AsyncStorage} from 'react-native';

export const DECKS_STORAGE_KEY = 'decksqq:umf';

let data = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer:
                    'The combination of a function and the lexical environment within which that function was declared.',
            }
        ]
    }
};
/*
{
	"Python": {
		"title": "Python",
		"questions": [{
				"question": "A",
				"answer": "B"
			},
			{
				"question": "C",
				"answer": "D"
			}
		]
	}
}
*/

export function initData(){
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    return data
}

export function getDecks(){
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(
        results => {
            return results === null ? initData() : JSON.parse(results)
        }
    );
}

export function createDeck(deck){
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function deleteDeck(key) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

export function addCard({title, card}){
    return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
        let decks = JSON.parse(result);
        let newQuestions = JSON.parse(JSON.stringify(decks[title].questions));
        newQuestions[newQuestions.length] = card;

        const delta = JSON.stringify({
            [title]: {title: title, questions: newQuestions},
        });
        AsyncStorage.mergeItem(DECKS_STORAGE_KEY, delta);
    });
}