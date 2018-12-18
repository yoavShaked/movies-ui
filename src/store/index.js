import root from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const middelwares = [thunk, logger];

export function configureStore() {
    const store = createStore(
        root,
        compose(applyMiddleware(...middelwares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
 );
 return store;
}