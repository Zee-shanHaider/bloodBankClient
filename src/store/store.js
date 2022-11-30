import {compose ,applyMiddleware, createStore} from 'redux';
// import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { rootReducer } from './rootReducer';

const middlewares = [logger,thunk ];


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))


export const store = createStore(
    rootReducer,
    undefined,
    composedEnhancers)