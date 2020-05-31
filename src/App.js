import React from 'react';
import "bootstrap/dist/css/bootstrap-grid.css";
import "../src/App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WelcomePage from "./components/welcome-page.component";
import MainPage from "./components/main-page.component";


function App() {
  return (
    <Router >
      <div className="App" id="height100">
        <Route path="/" exact component={WelcomePage} />
        <Route path="/main" component={MainPage} />
      </div>
    </Router>
  );
}

export default App;
