import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreServiceProvider } from './components/store-service-contex'

import './index.css';
// import App from './App';
import App from './components/app';
import ChackService from './services/store-service';

import Header from './components/header';
import * as serviceWorker from './serviceWorker';
import ErrorBoundry from './components/error-boundry/error-boundry';

import store from './store';

const chackService = new ChackService();

// ReactDOM.render(<Header  />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <StoreServiceProvider value={chackService}  >
                <Header />
                <Router>
                    <App />
                </Router>
            </StoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')

)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
