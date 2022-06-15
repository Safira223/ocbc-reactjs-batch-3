// userReducer
const initialState = {
    users: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'setUsers':
            return{ ...state, users: action.payload };
        default:
            return state;
    }
};

export default reducer;