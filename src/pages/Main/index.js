import React from 'react';

import './style.scss';

import Menu from './Menu';
import PrevisaoDosUltimosCincoDias from './PrevisaoDosUltimosCincoDias';
import PrevisaoDeHoje from './PrevisaoDeHoje';

export default () => {
    return (
        <div className="main">
            <Menu />
            <PrevisaoDosUltimosCincoDias />
            <PrevisaoDeHoje />
        </div>
    );
};
