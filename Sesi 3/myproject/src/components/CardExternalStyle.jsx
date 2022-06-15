// External object variabel CSS

// keuntungannya :
// 1. sama seperti Object Variabel CSS, namun bedanya kita bisa terapkan style yang sama di beberapa component yang berbeda

// kekurangannya :
// 1. Kita gak punya fitur auto complete dan akan dianggap sebagai object biasa

import { cardStyle, largeCardStyle} from './Card.style.js'

// sintaks di dalam css dengan style di react :
// css -> snake case (border-radius)
// react -> camelCase (borderRadius)

const CardExternalStyle = () => {
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

export default CardExternalStyle;