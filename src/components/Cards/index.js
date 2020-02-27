import React from 'react';
import moment from 'moment';

import { verificarClimaERetornarIcone } from '../../utils/helpers';
import './style.scss';

const Cards = ({ previsoes }) => {
    return previsoes.forecast[0].time
        .filter((_, index) => index % 8 === 0)
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

export default Cards;
