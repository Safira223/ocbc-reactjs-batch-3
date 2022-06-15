// langkah-langkah setup redux (versi Web):
// 1. kita import createStore dari redux
// 2. kita siapkan initialState dan juga reducer
// 3. kita siapkan store-nya dengan value dari createStore
// 5. kita jalankan dispatch nya dengan event listener

// bonus :
// 1. buat reducer lagi untuk ganti nama -> manfaatkan combineReducer()

// 1. import createStore dari redux
// import Redux, { combineReducers } from 'redux';

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

const store = createStore(counterReducer);

// 4. jalankan aksinya

// kita siapkan elemen-elemen HTML-nya
const counterElement = document.getElementById("count");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");

// buat function untuk manipulasi elemen id="count"
const render = () => {
    const state = store.getState();

    counterElement.textContent = state.counter;
}

// siapkan store.subscribe()

store.subscribe(() => {
    // render setiap kali state-nya berubah
    render();
});

render();

// tambahkan event listener untuk setiap tombolnya

incrementElement.addEventListener('click', () => {
    // dispatch action
    store.dispatch({ type: 'increment' });
});

decrementElement.addEventListener('click', () => {
    store.dispatch({ type: 'decrement' });
});

