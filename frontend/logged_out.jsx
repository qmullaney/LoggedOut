import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser){
        const preLoadedState = {
            session: {
                id: window.currentUser.id
            },
            entities: {
                users: {
                    [window.currentUser.id]: currentUser 
                }
            }
        };
        store = configureStore(preLoadedState);
        delete window.currentUser;
    }else{
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root)
})