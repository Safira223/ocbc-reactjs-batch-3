// import logo from './logo.svg';
import './App.css';
// CSS module

// kelebihan :
// 1. kita tetap bisa mengimplementasikan sintaks CSS pada file eksternal
// 2. kita bisa isolasikan class yang memiliki nama yang sama pada component yang berbeda

// kekurangan :
// 1. sama seperti objet variabel CSS gak disediakan auto compilation
// 2. 
import AppStyle from './App.module.css';
import Button from './components/Button';
// import Person from './components/Person';
// import Example from './components/Count2';
// import Counter from './components/Count1';
import CardInlineStyle from './components/CardInlineStyle';
import CardObjectVariableStyle from './components/CardObjectVariableStyle';
import CardExternalStyle from './components/CardObjectVariableStyle';

function App() {
  return (
    <div className="App">
      {/* single tag */}
      <Button title = "FSD 2 OCBC Batch 3 - React"/>
      <Button />

      <header className="App-header">
      {/* <Person name="Alex" job="Full-stack developer" />
      <Person name="Dini" job="React developer" />

      <Counter />
      <Example /> */}

      {/* cards */}
      <CardInlineStyle /> <br />


      <CardObjectVariableStyle />
      <div className={AppStyle.center}>
        Test Application
      </div>

      <CardExternalStyle />

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
