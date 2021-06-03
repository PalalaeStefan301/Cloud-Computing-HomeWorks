
import About from './components/About'
import Home from './components/homepage/Home'
import Quizzes_teacher from './components/list_quizzes/teacher/App'
import Quizzes_student from './components/list_quizzes/student/App'
import Quiz from './components/quizzes/App'
import Login from './components/test/Login'
import Create_quiz from './components/create_quiz/App'
import Register from './components/test/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/teacher" exact component={Quizzes_teacher}/>
          <Route path="/student" exact component={Quizzes_student}/>
          <Route path="/quiz" exact component={Quiz}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/createQuiz" exact component={Create_quiz}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
