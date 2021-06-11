import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Visualization from "./pages/Visualization";
import Monitoring from "./pages/Monitoring";
import RealTime from "./pages/RealTime";

function App() {
  return (
    <Router basename="/capstone_reactApp">
      <Switch>
        <Route path="/real-time" component={RealTime}></Route>
        <Route path="/monitoring" component={Monitoring}></Route>
        <Route path="/visualization" component={Visualization}></Route>
        <Route path="/" component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;
