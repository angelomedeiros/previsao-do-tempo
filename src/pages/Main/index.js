import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
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

            <ToastContainer autoClose={3000} position="top-center" />
        </div>
    );
};
