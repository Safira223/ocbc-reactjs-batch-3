// Action Creator
// 1. export langsung function-nya
// 2. function yang kita buat harus me-return action
// object { type: wtring, payload? any }
// 3. [Jika] sudah menerapkan middleware (redux-thunk, function yang kita buat harus
//     me-return antara [1] action object { type: wtring, payload? any }, atau 
//     [2]sebuah function (dispatch, getState) => {}


// kalau bisa jangan ikuti practice seperti ini dulu
import store from '..';

export const incrementCounter = () => {
    // cara yang salah
    // const currentCount = store.getState();
    // console.log(currentCount);

    // cara yang benar
    const currentState = store.getState();
    const count = currentState.counter.count;

    if(count+ 1 > 10) {
        alert("Counter sudah lebih dari 10!");
        return {type: ''};
    } else {
        return {type: 'increment'};
    }
}