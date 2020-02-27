import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer, console.tron.createEnhancer());

export default store;
