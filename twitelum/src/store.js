import { createStore } from 'redux';

const store = createStore(tweetsReducer);

function tweetsReducer(state = [], action = {}) {
    if (action.type === 'CARREGAR_TWEETS') {
        return action.tweets;
    }

    return state;
}

export default store;