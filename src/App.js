import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MainSections } from './page'

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path="/about" exact>
            <MainSections/> 
          </Route>
          <Route path="/users" exact>
            <MainSections/> 
          </Route>
          <Route path="/" >
            <MainSections/> 
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
