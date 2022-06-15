// keuntungannya :
// 1. Kita gak perlu set style yang sama di beberapa komponen yang berbeda
// 2. kita bisa ambil value yang sama (destruct) dari satu variabel ke dalam variable baru untuk menggunakan style yang sejenis

// kekurangannya :
// 1. Kita gak punya fitur auto complete dan akan dianggap sebagai object biasa

const cardStyle = {
    borderRadius: "15px", 
    backgroundColor: "white", 
    boxShadow: "4px 4px 4px #111", 
    color: "black"
}

const largeCardStyle = {
    ...cardStyle, // spread operator
    borderRadius:"20px",
    fontSize: "125%"
}

// sintaks di dalam css dengan style di react :
// css -> snake case (border-radius)
// react -> camelCase (borderRadius)

const CardObjectVariableStyle = () => {
    return (
        <>
            <div style={ cardStyle }>
                <h2>Ini adalah judul</h2>
                <p>Ini adalah konten sederhana dari card biasa pada object variable CSS, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div style={ largeCardStyle }>
                <h2>Ini adalah judul</h2>
                <p>Ini adalah konten sederhana dari card yang lebih besar pada object variable CSS, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </>
    );
}

export default CardObjectVariableStyle;