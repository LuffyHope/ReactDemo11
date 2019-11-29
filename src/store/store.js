import { createStore,applyMiddleware, } from 'redux';
import reducer from '../reducer/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import sage from '../sages/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk,sagaMiddleware];
const store = createStore(reducer,applyMiddleware(...middlewares));
sagaMiddleware.run(sage);

export default store;