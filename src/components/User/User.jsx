import React from 'react';
import { connect } from 'react-redux'
import { selectUser } from '../../redux/selectors/auth';
import { logOut } from '../../redux/actions/authActions';
import { UserElement, UserAccount, UserLogoutBtn } from './User.styles.jsx';

const User = ({ user, logOut }) => (
    <UserElement>
        <UserAccount>{user.email}</UserAccount>
        <UserLogoutBtn onClick={logOut} color="#000" textColor="#fff">
            Выйти
        </UserLogoutBtn>

    </UserElement>
);

const mapStateToProps = (state) => ({
    user: selectUser(state)
});

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);