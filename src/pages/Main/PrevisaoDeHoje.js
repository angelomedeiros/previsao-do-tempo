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
        <div className="previsao-de-hoje__stat">
            <div className="previsao-de-hoje__stat--row">
                <p>Wind</p>
                <p>Gentle Breeze, 4.6 m/s, East (90)</p>
            </div>
            <div className="previsao-de-hoje__stat--row">
                <p>Cloudiness</p>
                <p>Scattered clouds</p>
            </div>
            <div className="previsao-de-hoje__stat--row">
                <p>Pressure</p>
                <p>1009 hpa</p>
            </div>
            <div className="previsao-de-hoje__stat--row">
                <p>Humidity</p>
                <p>74%</p>
            </div>
            <div className="previsao-de-hoje__stat--row">
                <p>Sunrise</p>
                <p>06:02</p>
            </div>
            <div className="previsao-de-hoje__stat--row">
                <p>Sunset</p>
                <p>18:57</p>
            </div>
            <div className="previsao-de-hoje__stat--row">
                <p>Geo coords</p>
                <p>[-26.92, -49.07]</p>
            </div>
        </div>
    </div>
);
