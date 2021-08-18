import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import Kinder from "./pages/Kinder"
import First from "./pages/First"
import Second from "./pages/Second"

function App() {
  return (
    <Router>
    <div>
      

      <Switch>
      <Route exact path="/" component={Home} />

        <Route exact path="/kindergarten" component={Kinder} />

        <Route exact path="/firstgrade" component={First} />

        <Route exact path="/secondgrade" component={Second} />
  
  
      </Switch>
    </div>
  </Router>
  );
}

export default App;
