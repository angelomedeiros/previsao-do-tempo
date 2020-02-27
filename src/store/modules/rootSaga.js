import { all } from 'redux-saga/effects';

import previsoes from './previsoes/sagas';

export default function* rootSaga() {
    return yield all([previsoes]);
}
