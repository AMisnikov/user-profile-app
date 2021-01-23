import { LOG_IN, LOG_OUT } from '../actionTypes/authActionTypes';
import { parseJwt } from '../../utils/utils';

export const logIn = (user) => ({
    type: LOG_IN,
    user
});

export const logOut = () => ({
    type: LOG_OUT
});

export const startLogin = ({ email, password }) => {
    return async (dispatch) => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
    
        if(response.status === 200) {
            const success = await response.json();
            const { sub, email } = parseJwt(success.accessToken);
           
            dispatch(logIn({
                email,
                id: sub,
                token: success.accessToken
            }));
            return success;   
        } else if (response.status === 400) {
            const error = await response.json();
            return { error };
        } else {
            throw new Error('Error!!!');
        }
      
         
    }
};