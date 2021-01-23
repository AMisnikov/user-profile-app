import React from 'react';
import { Link } from 'react-router-dom';

import './_not-found-page.scss';

const NotFoundPage = () => (
    <div className="not-found-page">
        <div className="not-found-page__top">404</div>
        <div className="not-found-page__bottom">Страница не найдена</div>
        <Link to='/' className="btn btn--black" >Вернуться на главную</Link>
    </div>
);

export default NotFoundPage;