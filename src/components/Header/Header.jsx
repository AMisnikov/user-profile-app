import React from 'react';
import Search from '../Search/Search.jsx';
import User from '../User/User.jsx';

import './_header.scss';

const Header = () => (
    <header className="header">
        <div className="header__wrapper">
            <Search className="header__column" />
            <User className="header__column" />        
        </div>
    </header>
);

export default Header;