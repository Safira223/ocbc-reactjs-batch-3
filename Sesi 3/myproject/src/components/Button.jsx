import {Component} from "react";

class Button extends Component {
    constructor(props) {
        // untuk melemparkan props di level constructor
        super(props);

        // masalah: Cannot read properties of undefined (reading. 'setState')
        // solusi 1 -> bind
        this.state = {
            title: this.props.title || 'Default value'

        };
    }

    // componentDidMount() {
    //     console.log("componentDidMount() => Component pertama kali dibuat");
    //     alert("Component berhasil dibuat!");
    // }

    // // shouldComponentUpdate akan bertindak sebagai conditional sebelum component di-render ulang
    // shouldComponentUpdate() {
    //     // jika di return true, maka component akan di-render ulang
    //     // selebihnya tidak akan di-render ulang
    //     return false;
    // }

    // componentDidUpdate() {
    //     console.log("componentDidUpdate() => Component berhasil diubah");
    //     alert("Anda berhasil mengklik sebuah tombol!");
    // }

    // componentWillUnmount() {
    //     alert("Anda berhasil menghancurkan component ini!");
    // }

    getTitle() {
        let formattedTitle = this.state.title
        return formattedTitle.toLowerCase()
    }

    // action untuk mengubah this.state.title dengan menggunakan this.setState()
    setTitle = () => {
        // this.setState -> mengirim data ke dalam store dalam component kemudian mengubah data pada state tersebut
        this.setState({
            // key: value
            title: "Selamat datang!"
        })
    }

    // akan digunakan untuk menampilkan elemen HTML
    // function component : return (<>Isi</>)

    render() {
        return (
            <>
                {/* menampilkan state dengan this state */}
                <h1>{this.getTitle()}</h1>

                <button onClick={this.setTitle}>Ganti judul</button>
            </>
        )
    }
}

export default Button;