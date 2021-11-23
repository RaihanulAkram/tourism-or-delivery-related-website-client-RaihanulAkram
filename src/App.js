import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AddTours from './Pages/AddTours/AddTours';
import MainTours from './Pages/MainTours/MainTours';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/tours">
            <MainTours></MainTours>
          </Route>

          <Route exact path="/addTours">
            <AddTours></AddTours>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;