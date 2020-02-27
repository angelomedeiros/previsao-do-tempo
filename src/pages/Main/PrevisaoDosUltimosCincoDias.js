import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'moment/locale/pt-br';

import * as Actions from '../../store/modules/previsoes/actions';

import search from '../../assets/search.png';
import loader from '../../assets/loader.svg';

import Cards from '../../components/Cards';

export default () => {
    const dispatch = useDispatch();
    const previsoes = useSelector(state => state.previsoes);

    const [cidade, setCidade] = useState();

    const getPrevisoes = async () => {
        dispatch(Actions.getPrevisoesRequest(cidade));
    };

    const handleChange = e => setCidade(e.target.value);

    const handleKeyPress = e => {
        if (e.keyCode === 13) {
            getPrevisoes();
        }
    };

    return (
        <div className="previsao-dos-ultimos-dias">
            <div className="previsao-dos-ultimos-dias__header">
                <h1>Seja bem vindo</h1>
                <h2>Selecione uma cidade</h2>
            </div>
            <div className="input-container">
                <input
                    className="input-search"
                    placeholder="Pesquisar por cidade"
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={getPrevisoes} type="button">
                    <img src={search} alt="search" />
                </button>
            </div>
            <div className="previsao-dos-ultimos-dias__section">
                {previsoes.isFetching ? (
                    <img src={loader} alt="loader" style={{ marginTop: 20 }} />
                ) : (
                    Object.keys(previsoes).includes('forecast') &&
                    previsoes.forecast[0].time.length !== 0 && (
                        <>
                            <h3>
                                Previsão para os próximos 5 dias nesse mesmo
                                horário:
                            </h3>
                            <div className="container">
                                <Cards previsoes={previsoes} />
                            </div>
                        </>
                    )
                )}
            </div>
        </div>
    );
};
