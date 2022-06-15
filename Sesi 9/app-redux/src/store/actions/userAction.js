// import store from ".."; // kalau diperlukan

export const getUsers= () => {
    // cara salah 
    // let users = [];

    // fetch('http://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(data => {
    //         users = data;
    //     });

    // return { type: 'setUsers', payload: users };

    // return action(dispatch, getState, extraArgument)

    // cara benar
    return async (dispatch) => {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        dispatch({ type: 'setUsers', payload: data });
    }
}