import React, {useReducer, useEffect} from "react";
import { connect } from 'react-redux';
import { startLogin } from '../../redux/actions/authActions';
import Loader from '../Loader/Loader.jsx';
import { Button } from "../Button/Button.jsx";
import { StyledLoginForm } from './LoginForm.styles.jsx';
import Input from "../Input/Input.jsx";
import FormAlert from '../FormAlert/FormAlert.jsx';
import formReducer from '../../formValidation/formReducer';
import validationSchema from '../../formValidation/validationSchema';
import { setField, setFormValidity, setFormErr, setFetchingStatus } from '../../formValidation/formActions';
import { getFieldErrors } from '../../formValidation/validationHelpers';


const initialState = {
  login: {
      value: '',
      errors: [],
      isValid: false
  },
  password: {
      value: '',
      errors: [],
      isValid: false
  },
  isFormValid: false,
  isFetching: false,
  formErr: ''
};



const LoginForm = ({ logIn }) => {


  const [state, dispatch] = useReducer(formReducer, initialState);


  useEffect(() => {
    if(state.login.isValid && state.password.isValid) {
      dispatch(setFormValidity(true));
    } else {
      dispatch(setFormValidity(false));
    }
  }, [state.login, state.password]);

  const handleInputChange = (e) => {
    if(state.formErr) {
      dispatch(setFormErr(''));
    }

    const name = e.target.name;
    const value = e.target.value;
    const errors = getFieldErrors(name, value, validationSchema);

    dispatch(setField({
      name,
      data: {
        value,
        errors,
        isValid: !errors.length > 0
      } 
    }));


  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!state.isFetching) {

      dispatch(setFetchingStatus(true));

      logIn({
        email: state.login.value,
        password: state.password.value
      }).then(res => {
        if(res && res.error) {
          dispatch(setFormErr(res.error));
          dispatch(setFetchingStatus(false));
        }
      }).catch(e => {
        console.log(e);
        dispatch(setFormErr('Ошибка. Обновите страницу и попробуйте снова'));
        dispatch(setFetchingStatus(false));
      });
    }

    

  };

  return (
    <div>
    <StyledLoginForm onSubmit={handleSubmit} action="#" method="POST" noValidate >
        <Input 
            className={ state.login.errors.length > 0 ? 'input--invalid' : ''}
            labelText="E-mail"
            type="email"
            name="login"
            id="login-form-email"
            placeholder="Введите e-mail" 
            onChange={handleInputChange}
            value={state.login.value}
            errors={state.login.errors}
        />
        <Input 
            className={ state.password.errors.length > 0 ? 'input--invalid' : ''}
            labelText="Пароль"
            type="password"
            name="password"
            id="login-form-password"
            placeholder="Введите пароль"
            onChange={handleInputChange}
            value={state.password.value}
            errors={state.password.errors}
        />
      <Button 
        disabled={ !state.isFormValid || state.isFetching || state.formErr ? true : false} 
        color="#000000"
        textColor="#fff"
        type="submit" 
        style={{
          position: 'relative',
          minHeight: '4.84rem' 
        }}

        >
        { state.isFetching ? <Loader size={20} /> : 'Войти'}
        </Button>

        {state.formErr && <FormAlert>{state.formErr}</FormAlert> }
    </StyledLoginForm>
  </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(startLogin(user))
});

export default connect(undefined, mapDispatchToProps)(LoginForm);
