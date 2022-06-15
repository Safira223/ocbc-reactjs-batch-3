import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// function Header() {
//   const activeStyle = {
//       fontWeight: 700,
//       color: 'yellow'
//   }

//   const checkIsActive = ({isActive}) => isActive ? activeStyle : undefined;

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
//         <a class="navbar-brand" href="/">My React App</a>
//         <div className="container d-flex flex-wrap">
//           <ul className="nav me-auto">
//             <li className="nav-item">
//               <NavLink to={"/"} style={checkIsActive} className="nav-link link-dark px-2">Home</NavLink>
//             </li>
//             <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Todos</a></li>
//             <li className="nav-item"><a href="/" className="nav-link link-dark px-2">FAQs</a></li>
//             <li className="nav-item"><a href="/" className="nav-link link-dark px-2">About</a></li>
//           </ul>
//           <ul className="nav">
//             <li>
//               <form className="col-12 col-lg-auto mb-3 mb-lg-0">
//                 <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
//               </form>
//             </li>
//           </ul>
//           <ul className="nav">
//             <li><a href="/" class="btn btn-success mx-3">Login</a></li>
//             <li><a href="/" class="btn btn-primary">Daftar</a></li>
//           </ul>
//         </div>    
//       </nav>
//     </>
//   );
// }

// function Content() {
//   return (
//     <>
//       <div className="p-5 mb-4 bg-light rounded-3 border">
//         <div className="container-fluid py-5">
//           <h1 className="display-5 fw-bold">About Me</h1>
//           <p className="col-md-8 fs-4">My name is Fira. I'm 22 years old. <br />
//           I'm a hard working person who is able to analyze and solve problems, responsible, trustworthy, discipline, and commitment. <br />
//           Recent college graduate with a degree in Computer Science who is competent in a variety of programming languages, platforms and tools.</p>
//           <button className="btn btn-primary btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Example Button</button>
//         </div>
//       </div>
    
//       {/* Modal */}
//       <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">This is my first modal box</div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" className="btn btn-primary">Save Changes</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
    

//   );
// }

// function Footer() {
//   return (
//     <footer className="text-muted py-5 border-top">
//       <div className="container">
//         <p className="mb-1">This is My First React app in bootstrap</p>
//         <p className="mb-0">New to React? <a href="https://reactjs.org/">Visit the homepage</a></p>
//       </div>
//     </footer>
//   );
// }

function App() {
  return (
    <>
      <Header />
      <div className="container">
      <Content />
      </div>
      <Footer /> 
    </>
  );
}

export default App;
