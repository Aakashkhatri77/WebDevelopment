import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/Header';
import Body from './Body/Body';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <Header></Header>
      <Body></Body>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
