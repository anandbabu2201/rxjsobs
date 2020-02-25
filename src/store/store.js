import {createStore,applyMiddleware,compose} from 'redux';
import {rootReducer} from '../reducer'

const initialState = {};

const middleWare= [];
const store = createStore(rootReducer,initialState,compose(applyMiddleware(...middleWare),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;