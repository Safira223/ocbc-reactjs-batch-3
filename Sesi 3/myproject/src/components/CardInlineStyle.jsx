import CardInlineStyleModule from './CardInlineStyle.module.css';

const CardInlineStyle = () => {
    return (
        <>
            <div style={{borderRadius: "15px", backgroundColor: "white", boxShadow: "4px 4px 4px #111", color: "black"}}>
            <h2 className={CardInlineStyleModule.center}>Ini adalah judul</h2>
                <p>Ini adalah konten sederhana dari card biasa pada object variable CSS, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </>
    );
}

export default CardInlineStyle;