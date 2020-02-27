import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';

import { parseString } from 'xml2js';
import * as Actions from '../../store/modules/previsoes/actions';

import search from '../../assets/search.png';
import clouds from '../../assets/clouds.png';
import clear from '../../assets/clear.png';
import rain from '../../assets/rain.png';
import thunderstorm from '../../assets/thunderstorm.png';
import loader from '../../assets/loader.svg';

export default () => {
    const dispatch = useDispatch();

    const [cidade, setCidade] = useState();
    const [loading, setLoading] = useState(false);
    const [previsoes, setPrevisoes] = useState({
        forecast: [
            {
                time: [],
            },
        ],
    });
    const horaUsuario = moment().format('H');

    const verificarClimaERetornarIcone = climaCode => {
        if (
            [500, 501, 502, 503, 504, 511, 520, 521, 522, 531].includes(
                climaCode
            )
        ) {
            return rain;
        }
        if (climaCode === 800) {
            return clear;
        }
        if (
            [200, 201, 202, 210, 211, 212, 221, 230, 231, 232].includes(
                climaCode
            )
        ) {
            return thunderstorm;
        }
        return clouds;
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
                    mode: 'xml',
                },
            }
        );
        parseString(data, (err, res) => {
            console.log(res.weatherdata);
            setPrevisoes(res.weatherdata);
            dispatch(Actions.getPrevisoes(res.weatherdata));
        });
        setLoading(false);
    };

    const handleChange = e => setCidade(e.target.value);

    const handleKeyPress = e => {
        if (e.keyCode === 13) {
            getPrevisoes();
        }
    };

    const Cards = () => {
        return previsoes.forecast[0].time
            .filter(previsao => {
                const horaPrevisao = moment
                    .parseZone(previsao.$.from)
                    .utcOffset(previsoes.location[0].timezone[0] / 3600)
                    .format('H');
                const horaDoUsuarioNormalizada = String(
                    horaUsuario - (horaUsuario % 3)
                );
                return horaPrevisao === horaDoUsuarioNormalizada;
            })
            .map(previsao => (
                <div key={previsao.$.from} className="card">
                    <div className="card__header">
                        <img
                            src={verificarClimaERetornarIcone(
                                previsao.symbol[0].$.number
                            )}
                            alt="clima"
                        />
                        <p>
                            {moment(previsao.$.from)
                                .format('ddd')
                                .toUpperCase()}
                        </p>
                    </div>
                    <div className="card__temperatura">
                        <p>
                            {previsao.temperature[0].$.value}
                            <span>ºC</span>
                        </p>
                    </div>
                    <div className="card__stats">
                        <p>{previsao.windSpeed[0].$.mps} m/s</p>
                        <p>clouds: {previsao.clouds[0].$.all}%</p>
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
                    previsoes.forecast[0].time.length !== 0 && (
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
