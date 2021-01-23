import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isUserAuth } from '../redux/selectors/auth';

const PublicRoute = ({ isAuth, children, ...otherProps }) => (
    <Route {...otherProps} >
        {
            isAuth ? (
                 <Redirect to='/profile' />
            ) : (
                children 
            )
        }
    </Route>
);

const mapStateToProps = (state) => ({
    isAuth: isUserAuth(state)
});

export default connect(mapStateToProps)(PublicRoute);