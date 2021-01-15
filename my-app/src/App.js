import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import HomePage from "./pages/homepage.jsx"
import NotFoundPage from "./pages/404.jsx"
import ContactPage from "./pages/contact.jsx"
import Insta from "./pages/insta.jsx"

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/insta" component={Insta} />
        <Route exact path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
