// langkah-langkah setup redux :
// 1. kita import createStore dari redux
// 2. kita siapkan initialState dan juga reducer
// 3. kita siapkan store-nya dengan value dari createStore
// 4. kita tambahkan satu function subscriber
// 5. kita jalankan dispatch nya

// bonus :
// 1. buat reducer lagi untuk ganti nama -> manfaatkan combineReducer()

// 1. import createStore dari redux
import Redux, { combineReducers } from 'redux';

// ! depracated
// gunakan configureStore dari @redux/toolkit sebagai gantinya

const { createStore } = Redux;

// 2. sipkan initialState dan reducer-nya

// initialState -> {}
const counterInitialState = {
    counter: 0
};

// reducer -> (state = initialState, action) => newState
// state = initialState -> untuk inisialisasi sebuah state di dalam reducer
// action -> {type: string, payload?: any}

const counterReducer = (state = counterInitialState, action) => {
    console.log({ state,action })

    switch(action.type) {
        case 'increment':
            // return:
            // 1. pecahkan state lama ke dalam object baru
            // 2. masukkan data baru ke dalam object
            return{ ...state, counter: state.counter + 1 };

        case 'decrement':
            return { ...state, counter: state.counter - 1 };

        case 'reset':
            return{ ...state, counter: counterInitialState.counter} ;
    }

    return state;
}

// bonus: combineReducer()

const userInitialState = {
    name: ""
}

const userReducer = (state = userInitialState, action) => {
    switch(action.type){
        case 'SetName':
            return{ ...state, name: action.payload };
    };

    return state;
};

// 3. buat store dengan reducer yang digabungkan
// TIP: gunakan combineReducers()

// gabungkan 2 reducer atau lebih ke dalam satu wadah
const reducers = {
    user: userReducer, 
    counter: counterReducer
};

// const state = store.getState()
// state.[namaReducer].[property]
// state.user.name
// state.counter.counter

// createStore() dengan parameter combineReducers()
// combineReducers() -> berisi parameter dari si reducer yang sudah kita gabungkan pada langkah di atas
const store = createStore(combineReducers(reducers));

// 4. subscribe-kan

store.subscribe(() => {
    // jika terjadi perubahan pada state di dalam store,
    // kita bisa gunakan subscribe in untuk memonitor
    // perubahannya, atau untuk menjalankan function tertentu

    // store.getState() -> mendapatkan state terkini dari store-nya
    console.log(store.getState())
});

// 5. jalankan aplikasinya

// store.dispatch(action) -> kita lemparkan action ke dalam reducer
// action -> {type: string, payload?: any}

store.dispatch({type: 'increment'});
store.dispatch({type: 'setName', payload: 'Fira'});