import './App.css';
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <h1>
              <li>
                <Link to="/">Home</Link>
              </li>
            </h1>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts/:id">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <h1>404 - Not Found!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
