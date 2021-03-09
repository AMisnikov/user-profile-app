import React from 'react';
import { Button } from '../../components/Button/Button.jsx';
import { Link } from 'react-router-dom';
import { NonFoundPageContainer, NonFoundPageTopEl, NonFoundPageBottomEl } from './NotFounfPage.styles.jsx';


const NotFoundPage = () => (
    <NonFoundPageContainer>
        <NonFoundPageTopEl>404</NonFoundPageTopEl>
        <NonFoundPageBottomEl>Страница не найдена</NonFoundPageBottomEl>
        <Button as={Link} to='/' color="#000" textColor='#fff' > Вернуться на главную </Button>
    </NonFoundPageContainer>
);

export default NotFoundPage;