import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom"
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
function App() {
  return (
    <Router>
    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3 ">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
           <Navbar/>
           <Switch>
             <Route exact path="/" component={About}/>
             <Route exact path="/resume" component={Resume}/>
             <Route exact path="/projects" component={Projects}/>
             <Route ><Redirect to="/"/></Route>
           </Switch>
            </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
