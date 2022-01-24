import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HOME from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <HOME />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
