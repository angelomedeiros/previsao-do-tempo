import React from 'react';
import { useSelector } from 'react-redux';

import moment from 'moment';
import 'moment/locale/pt-br';

import clouds from '../../assets/clouds.png';

export default () => {
    const previsoes = useSelector(state => state.previsoes);
    const horaUsuario = moment().format('H');

    if (
        Object.keys(previsoes).includes('forecast') &&
        previsoes.forecast[0].time.length > 0
    ) {
        const previsaoDeHoje = previsoes.forecast[0].time.filter(previsao => {
            const horaPrevisao = moment
                .parseZone(previsao.$.from)
                .utcOffset(previsoes.location[0].timezone[0] / 3600)
                .format('H');
            const horaDoUsuarioNormalizada = String(
                horaUsuario - (horaUsuario % 3)
            );
            return horaPrevisao === horaDoUsuarioNormalizada;
        })[0];

        return (
            <div className="previsao-de-hoje">
                <div className="previsao-de-hoje__header">
                    <div className="previsao-de-hoje__header--content">
                        <p>Today</p>
                        <p>
                            <strong>{previsoes.location[0].name}</strong>
                        </p>
                    </div>
                    <img
                        className="previsao-de-hoje__header--icon"
                        src={clouds}
                        alt="previsao"
                    />
                </div>
                <div className="previsao-de-hoje__temperatura">
                    <div className="previsao-de-hoje__temperatura--value">
                        <p>
                            {previsaoDeHoje.temperature[0].$.value}
                            <span>ºC</span>
                        </p>
                    </div>
                    <div className="previsao-de-hoje__temperatura--clima-e-data">
                        <p>{previsaoDeHoje.symbol[0].$.name}</p>
                        <p>
                            {moment
                                .parseZone(previsaoDeHoje.$.from)
                                .utcOffset(
                                    previsoes.location[0].timezone[0] / 3600
                                )
                                .format('HH:mm MMM DD')}
                        </p>
                    </div>
                </div>
                <div className="previsao-de-hoje__stat">
                    <div className="previsao-de-hoje__stat--row">
                        <p>Wind</p>
                        <p>
                            {previsaoDeHoje.windSpeed[0].$.name},{' '}
                            {previsaoDeHoje.windSpeed[0].$.mps} m/s,{' '}
                            {previsaoDeHoje.windDirection[0].$.code} (
                            {previsaoDeHoje.windDirection[0].$.deg})
                        </p>
                    </div>
                    <div className="previsao-de-hoje__stat--row">
                        <p>Cloudiness</p>
                        <p>{previsaoDeHoje.clouds[0].$.value}</p>
                    </div>
                    <div className="previsao-de-hoje__stat--row">
                        <p>Pressure</p>
                        <p>{previsaoDeHoje.pressure[0].$.value} hpa</p>
                    </div>
                    <div className="previsao-de-hoje__stat--row">
                        <p>Humidity</p>
                        <p>{previsaoDeHoje.humidity[0].$.value}%</p>
                    </div>
                    <div className="previsao-de-hoje__stat--row">
                        <p>Sunrise</p>
                        <p>
                            {moment
                                .parseZone(previsoes.sun[0].$.rise)
                                .utcOffset(
                                    previsoes.location[0].timezone[0] / 3600
                                )
                                .format('HH:mm')}
                        </p>
                    </div>
                    <div className="previsao-de-hoje__stat--row">
                        <p>Sunset</p>
                        <p>
                            {moment
                                .parseZone(previsoes.sun[0].$.set)
                                .utcOffset(
                                    previsoes.location[0].timezone[0] / 3600
                                )
                                .format('HH:mm')}
                        </p>
                    </div>
                    <div className="previsao-de-hoje__stat--row">
                        <p>Geo coords</p>
                        <p>
                            [{previsoes.location[0].location[0].$.latitude},{' '}
                            {previsoes.location[0].location[0].$.longitude}]
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};
