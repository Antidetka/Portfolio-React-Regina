import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/" component={About} />
        <Route  path = "/about" component={About} />
        <Route  path = "/projects" component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
