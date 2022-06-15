import React from 'react';
// import Product from './Product';
import ReactDOM from 'react-dom';
// import "./index.css";

const HelloWorld = () => {
    return (
        <>
            <h2>Hello, My Name is Fira</h2>
            <Name />
            <Table />
        </>
    );
}

const Name = () => {
    return (
        <center><h3><u>Tabel Mahasiswa</u></h3></center>
    )
}

// const Table = () => {
//     return (
//         <table border="1" align="center">
//             <tr>
//                 <th rowspan="2">NIM</th>
//                 <th rowspan="2">Nama Lengkap</th>
//                 <th colspan="4">Nilai</th>
//             </tr>
//             <tr>
//                 <th>Basis Data</th>
//                 <th>Kalkulus</th>
//                 <th>Grammar</th>
//                 <th>Aljabar</th>
//             </tr>
//             <tr>
//                 <td>20170801084</td>
//                 <td>Hafizah Safira</td>
//                 <td>80</td>
//                 <td>75</td>
//                 <td>90</td>
//                 <td>85</td>
//             </tr>
//             <tr>
//                 <td>20170801129</td>
//                 <td>Devira Asha</td>
//                 <td>80</td>
//                 <td>70</td>
//                 <td>80</td>
//                 <td>75</td>
//             </tr>
//             <tr>
//                 <td>20170801160</td>
//                 <td>M Nurohmat</td>
//                 <td>96</td>
//                 <td>85</td>
//                 <td>72</td>
//                 <td>80</td>
//             </tr>
//         </table>
//     )
// }


ReactDOM.render(<HelloWorld />,
    document.getElementById("root"));


// class Car extends React.Component {
//     render() {
//         return <h2>I am a {this.props.brand.name}!</h2>;
//     }
// }

// class Garage extends React.Component{
//     render() {
//         const carinfo = {name: "Ford", model: "Mustang"};
//         return (
//             <div>
//                 <h1>
//                     Who lives in my garage?
//                 </h1>
//                 <Car brand={carinfo} />
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Garage />,
// document.getElementById('root'));

// function Welcome(props) {
//     return <h1>Halo, {props.name}</h1>;
// }

// function App() {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="Cahal" />
//             <Welcome name="Edite" />
//         </div>
//     );
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById()
// )

// function App() {
//     return (
//         <div>
//             <h1>Hello World</h1>
//             <Product />
//         </div>
//     );
// }

// export default App;
