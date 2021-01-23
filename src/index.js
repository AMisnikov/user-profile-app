import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './redux/store/configStore';
import AppRouter from './router/AppRouter.jsx';


import 'normalize.css';
import './styles/scss/main.scss';


const rootEl = document.getElementById('root');

const store = configStore();

const app = (<Provider store={store}>
                <AppRouter />
            </Provider>);

ReactDOM.render(app, rootEl);



