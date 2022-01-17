import logo from './logo.svg';
import './App.css';
import react, {useState} from "react"
import Text from './Text';
import Navbar from './Navbar';
import Calculator from './Calculator';
function App() {
  const [mode, setMode] = useState('light'); 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div className="App">
     
<Navbar title="MyTextApp" mode={mode} toggleMode={toggleMode}/>
<Text mode={mode}/>
<Calculator/>
    </div>
  );
}

export default App;
