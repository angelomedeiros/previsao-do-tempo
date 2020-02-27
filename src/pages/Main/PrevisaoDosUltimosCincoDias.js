import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

import search from '../../assets/search.png';
import clouds from '../../assets/clouds.png';
import clear from '../../assets/clear.png';
import rain from '../../assets/rain.png';
import thunderstorm from '../../assets/thunderstorm.png';
import loader from '../../assets/loader.svg';
import 'moment/locale/pt-br';

export default () => {
    const [cidade, setCidade] = useState();
    const [loading, setLoading] = useState(false);
    const [previsoes, setPrevisoes] = useState({
        list: [],
    });
    const horaUsuario = moment().format('H');

    const verificarClimaERetornarIcone = clima => {
        switch (clima) {
            case 'Clouds':
                return clouds;
            case 'Clear':
                return clear;
            case 'Rain':
                return rain;
            case 'Thunderstorm':
                return thunderstorm;
            default:
                return clouds;
        }
    };

    const getPrevisoes = async () => {
        setLoading(true);
        const { data } = await axios.get(
            'http://api.openweathermap.org/data/2.5/forecast',
            {
                params: {
                    APPID: '0de7e18f09a5a264fe79cada99777e8c',
                    q: cidade,
                    units: 'metric',
                },
            }
        );
        setPrevisoes(data);
        setLoading(false);
    };

    const handleChange = e => setCidade(e.target.value);

    const handleKeyPress = e => {
        if (e.keyCode === 13) {
            getPrevisoes();
        }
    };

    const Cards = () => {
        return previsoes.list
            .filter(previsao => {
                const horaPrevisao = moment(previsao.dt_txt).format('H');
                const horaDoUsuarioNormalizada = String(
                    horaUsuario - (horaUsuario % 3)
                );
                return horaPrevisao === horaDoUsuarioNormalizada;
            })
            .map(previsao => (
                <div key={previsao.dt} className="card">
                    <div className="card__header">
                        <img
                            src={verificarClimaERetornarIcone(
                                previsao.weather[0].main
                            )}
                            alt="clima"
                        />
                        <p>
                            {moment(previsao.dt_txt)
                                .format('ddd')
                                .toUpperCase()}
                        </p>
                    </div>
                    <div className="card__temperatura">
                        <p>
                            {previsao.main.temp}
                            <span>ºC</span>
                        </p>
                    </div>
                    <div className="card__stats">
                        <p>{previsao.wind.speed} m/s</p>
                        <p>clouds: {previsao.clouds.all}%</p>
                    </div>
                </div>
            ));
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
                {loading ? (
                    <img src={loader} alt="loader" style={{ marginTop: 20 }} />
                ) : (
                    previsoes.list.length !== 0 && (
                        <>
                            <h3>Previsão para os próximos 5 dias:</h3>
                            <div className="container">
                                <Cards />
                            </div>
                        </>
                    )
                )}
            </div>
        </div>
    );
};
