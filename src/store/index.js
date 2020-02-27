import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
