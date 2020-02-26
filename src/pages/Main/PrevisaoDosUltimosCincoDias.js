import React from 'react';

import search from '../../assets/search.png';

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
            <h3>Previsão para a semana:</h3>
        </div>
    </div>
);
