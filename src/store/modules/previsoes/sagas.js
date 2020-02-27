import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';

import { toast } from 'react-toastify';
import { getPrevisoesSuccess, getPrevisoesLoading } from './actions';

function* getPrevisoes({ cidade }) {
    try {
        yield put(getPrevisoesLoading(true));
        const { data } = yield call(
            axios.get,
            'https://api.openweathermap.org/data/2.5/forecast',
            {
                params: {
                    APPID: '0de7e18f09a5a264fe79cada99777e8c',
                    q: cidade,
                    units: 'metric',
                    mode: 'xml',
                },
            }
        );

        const response2json = yield call(parseStringPromise, data);
        yield put(getPrevisoesSuccess(response2json.weatherdata));
    } catch (err) {
        toast.error('Cidada não encontrata!');
    } finally {
        yield put(getPrevisoesLoading(false));
    }
}

export default all([takeLatest('GET_PREVISOES_REQUEST', getPrevisoes)]);
