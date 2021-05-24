
import './App.css';
import About from './components/About'
import Shop from './components/Shop'
import Home from './components/homepage/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
