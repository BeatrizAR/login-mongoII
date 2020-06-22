import React from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './App.css';
import Registro from './components/registro';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Route exact path="/registro" component={Registro} />
      </div>
    </Router>
  );
}

export default App;
