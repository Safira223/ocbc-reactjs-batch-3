// inisialisasi state dan reducer
const initialState = {
    count: 0,
};

// aturan-aturan di reducer:
// 1. hanya memiliki1 tujuan -> untuk menimpa [state] lama dengan [state] baru
// 2. gak boleh ada side effect lainnya -> panggil function ataupun class luar
// misalkan: Math.random() dan semacamnya

const reducer = (state = initialState, action) => {
    // action -> { type: string, payload: any }
    switch(action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 } ; // cara mengembalikan state-nya yg sudah diubah
        
        case 'decrement':
            return { ...state, count: state.count - 1 };

        case 'reset':
            return { ...state, count: initialState.count }; // cara me-reset state-nya dengan initialState

        default: // default case untuk switch-case di luar pilihan
            return state;
    }
}

export default reducer;