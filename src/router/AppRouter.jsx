import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.jsx';
import PublicRoute from './PublicRoute.jsx';
import LoginPage from '../pages/LoginPage/LoginPage.jsx';
import ProfilePage from '../pages/ProfilePage/ProfilePage.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <PublicRoute path="/" exact={true}>
                <LoginPage />
            </PublicRoute>
            <PrivateRoute path="/profile" >
                <ProfilePage />
            </PrivateRoute>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
