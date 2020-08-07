import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";
import MainQuiz from "./components/MainQuiz";
import assist from "./components/assist";

function App() {

  return (

    <Router>
    <div className="App container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">HTML</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/assist">JavaScript <span className="sr-only">(current)</span></a>
            </li>

          </ul>
        </div>
      </nav>



      
    {/*<MainQuiz /> <div className="QIUZ">QUIZ BEGINNER HTML, CSS and JavaScript</div> */}  
    </div>


<Route path="/" component={MainQuiz} exact />
<Route path="/assist" component={assist} exact />


</Router>
  );
}







const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
