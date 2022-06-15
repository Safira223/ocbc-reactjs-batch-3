const Home = () => {

    const login = () => {
        // untuk menyimpan data baru ke dalam key yang kita sebutkan di dalam parameter
        const user = {user: 'Farhan'};

        localStorage.setItem('auth', JSON.stringify(user));

    }

    const logout = () =>{
        // localStorage.removeItem(key)
        // untuk menghapus data dari localStorage, berdasarkan key yang kita input
        

        localStorage.removeItem('auth');
    }

    return(
        <>
            <h2>Edit <code>src/App.js</code> and save to reload.</h2>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </>
    );
};

export default Home;