import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 ">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">main</div>
        </div>
      </div>
    </div>
  );
}

export default App;
