// install redux terlebih dahulu
// 1. import redux
import { createStore, combineReducers, applyMiddleware } from 'redux';

// middleware 1
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// 2. inisialisasi: state & reducer
// best practice: kita buat file terpisah

import userReducer from './reducers/userReducer';
import counterReducer from './reducers/counterReducer';

// 3. createStore() + combineReducers()
// kita akan memiliki lebih dari 1 reducer

const reducers = combineReducers({
    counter: counterReducer,
    user: userReducer
});

// 2. tambahkan enhancer
const enhancer = applyMiddleware(logger, thunk);


// !depracated
// nanti akan diterapkan kembali dengan Redux Toolkit (RTK)
const store = createStore(reducers, enhancer)

export default store;