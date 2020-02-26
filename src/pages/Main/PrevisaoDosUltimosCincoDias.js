import React from 'react';

import search from '../../assets/search.png';
import rain from '../../assets/few_clouds.png';

export default () => (
    <div className="previsao-dos-ultimos-dias">
        <div className="previsao-dos-ultimos-dias__header">
            <h1>Seja bem vindo</h1>
            <h2>Selecione uma cidade</h2>
        </div>
        <div className="input-container">
            <input
                className="input-search"
                placeholder="Pesquisar por cidade"
            />
            <img src={search} alt="search" />
        </div>
        <div className="previsao-dos-ultimos-dias__section">
            <h3>Previsão para os próximos 5 dias:</h3>
            <div className="container">
                <div className="card">
                    <div className="card__header">
                        <img src={rain} alt="clima" />
                        <p>SEG</p>
                    </div>
                    <div className="card__temperatura">
                        <p>
                            24.7<span>ºC</span>
                        </p>
                    </div>
                    <div className="card__stats">
                        <p>3.15 m/s</p>
                        <p>clouds: 33%</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                        <img src={rain} alt="clima" />
                        <p>SEG</p>
                    </div>
                    <div className="card__temperatura">
                        <p>
                            24.7<span>ºC</span>
                        </p>
                    </div>
                    <div className="card__stats">
                        <p>3.15 m/s</p>
                        <p>clouds: 33%</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                        <img src={rain} alt="clima" />
                        <p>SEG</p>
                    </div>
                    <div className="card__temperatura">
                        <p>
                            24.7<span>ºC</span>
                        </p>
                    </div>
                    <div className="card__stats">
                        <p>3.15 m/s</p>
                        <p>clouds: 33%</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                        <img src={rain} alt="clima" />
                        <p>SEG</p>
                    </div>
                    <div className="card__temperatura">
                        <p>
                            24.7<span>ºC</span>
                        </p>
                    </div>
                    <div className="card__stats">
                        <p>3.15 m/s</p>
                        <p>clouds: 33%</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                        <img src={rain} alt="clima" />
                        <p>SEG</p>
                    </div>
                    <div className="card__temperatura">
                        <p>
                            24.7<span>ºC</span>
                        </p>
                    </div>
                    <div className="card__stats">
                        <p>3.15 m/s</p>
                        <p>clouds: 33%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
