
import './App.css';
import About from './components/About'
import Shop from './components/Shop'
import Home from './components/homepage/Home'
import Quizzes_teacher from './components/list_quizzes/teacher/App'
import Quizzes_student from './components/list_quizzes/student/App'
import Quiz from './components/quizzes/App'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/quizzes" exact component={Quizzes_teacher}/>
          <Route path="/quizzes/student" exact component={Quizzes_student}/>
          <Route path="/quiz" exact component={Quiz}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
