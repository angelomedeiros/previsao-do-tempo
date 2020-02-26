import React from 'react';

import logo from '../../assets/logo.png';
import home from '../../assets/home.png';

export default () => (
    <div className="menu">
        <img className="menu__logo" src={logo} alt="logo" />
        <img className="menu__home" src={home} alt="logo" />
        <div className="menu__date-hour">
            <span className="menu__date-hour--date">08/12</span>
            <span className="menu__date-hour--hour">12:40PM</span>
        </div>
    </div>
);
