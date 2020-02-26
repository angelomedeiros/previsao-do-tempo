import React from 'react';

import fewClouds from '../../assets/few_clouds.png';

export default () => (
    <div className="previsao-de-hoje">
        <div className="previsao-de-hoje__header">
            <div className="previsao-de-hoje__header--content">
                <p>Today</p>
                <p>
                    <strong>São Paulo</strong>
                </p>
            </div>
            <img
                className="previsao-de-hoje__header--icon"
                src={fewClouds}
                alt="previsao"
            />
        </div>
        <div className="previsao-de-hoje__temperatura">
            <div className="previsao-de-hoje__temperatura--value">
                <p>
                    28<span>ºC</span>
                </p>
            </div>
            <div className="previsao-de-hoje__temperatura--clima-e-data">
                <p>Scatted clouds</p>
                <p>14;03 Fev 19</p>
            </div>
        </div>
    </div>
);
