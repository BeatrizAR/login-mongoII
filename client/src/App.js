import React from 'react';import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import './App.css';
import registro from './components/registro';

function App() {
  

  return (
    <Router>
      <div className="App">
        <Route exact path="/registro" component={registro} />
      </div>
    </Router>
  );
}

export default App;
