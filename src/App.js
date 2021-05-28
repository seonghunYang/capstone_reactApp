import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sub" component={Sub}></Route>
        <Route path="/" component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;
