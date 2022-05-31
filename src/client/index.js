import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>,
document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
        <Provider store={store}>
            <App />
            </Provider>,
        document.getElementById('root')
    )
    })
}

serviceWorker.unregister();