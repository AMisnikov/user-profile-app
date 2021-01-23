import React from 'react';
import { connect } from 'react-redux'
import { selectUser } from '../../redux/selectors/auth';
import { logOut } from '../../redux/actions/authActions';
import Button from '../Button/Button.jsx';

import './_user.scss';

const User = ({ className, user, logOut }) => (
    <div className={ className ? `user ${className}` : 'user'}>
        <div className="user__account">{user.email}</div>
        <Button onClick={logOut} className="btn--black user__logout">
            Выйти
        </Button>

    </div>
);

const mapStateToProps = (state) => ({
    user: selectUser(state)
});

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);