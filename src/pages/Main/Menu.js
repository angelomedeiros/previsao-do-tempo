import React, { useState, useEffect } from 'react';
import moment from 'moment';

import logo from '../../assets/logo.png';
import home from '../../assets/home.png';

export default () => {
    const [hora, setHora] = useState(Date.now());

    useEffect(() => {
        setTimeout(() => {
            setHora(hora + 1000);
        }, 1000);
    });

    return (
        <>
            <div className="elemento-fantastama-do-menu" />
            <div className="menu">
                <img className="menu__logo" src={logo} alt="logo" />
                <img className="menu__home" src={home} alt="logo" />
                <div className="menu__date-hour">
                    <span className="menu__date-hour--date">
                        {moment(hora).format('DD/YY')}
                    </span>
                    <span className="menu__date-hour--hour">
                        {moment(hora).format('HH:mm:ss A')}
                    </span>
                </div>
            </div>
        </>
    );
};
