import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './redux/store/configStore';
import GlobalStyles from './components/GlobalStyles/GlobalStyles.jsx';
import AppRouter from './router/AppRouter.jsx';


import 'normalize.css';



const rootEl = document.getElementById('root');

const store = configStore();

const app = (<Provider store={store}>
                <GlobalStyles />
                <AppRouter />
            </Provider>);

ReactDOM.render(app, rootEl);



