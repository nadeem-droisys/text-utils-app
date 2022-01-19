// import logo from './logo.svg';
// import './App.css';
// import react, {useState} from "react"
// import Text from './Text';
// import Navbar from './Navbar';
// import Calculator from './Calculator';
// function App() {
//   const [mode, setMode] = useState('light'); 

//   const toggleMode = ()=>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//     }
//   }
//   return (
//     <div className="App">
     
// <Navbar title="MyTextApp" mode={mode} toggleMode={toggleMode}/>
// <Text mode={mode}/>
// <Calculator/>
//     </div>
//   );
// }

// export default App;
import './App.css';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar2 from './Navbar2'
import News from './News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export class App extends Component {
  

  render() {
    return (
      <div> <Router><div>
        <Navbar2/>
        <Routes>
          <Route exact path="/"><News  pageSize={5} key="general" country="in" category="general"/></Route>
          <Route exact path="/business"> <News key="business" pageSize={5} country="in" category="business"/> </Route>
          <Route exact path="/entertainment"> <News key="entertainment" pageSize={5} country="in" category="entertainment"/> </Route>
          <Route exact path="/health"> <News key="health" pageSize={5} country="in" category="health"/> </Route>
          <Route exact path="/science"> <News key="science" pageSize={5} country="in" category="science"/> </Route>
          <Route exact path="/sports"> <News key="sports" pageSize={5} country="in" category="sports"/> </Route>
          <Route exact path="/technology"> <News key="Technology" pageSize={5} country="in" category="Technology"/> </Route>
          </Routes></div>
        </Router>
      </div>
    )
}
}

export default App
