import {createStore,applyMiddleware,compose} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers';
import rootEpic from '../epics'

const initialState = {};

const epicMiddlWare  = createEpicMiddleware(); // redux observables 

const middleWare= [epicMiddlWare]; 

const composeEnhancer = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
window.__REDUX_DEVTOOLS_EXTENSION__():compose;

const store = createStore(rootReducer,initialState,compose(applyMiddleware(...middleWare),
composeEnhancer));

epicMiddlWare.run(rootEpic);

export default store;