import React, { Fragment} from "react";
import Registration from "./components/Registration";
import HomePage from "./components/HomePage";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
        <Fragment>
    <BrowserRouter>
      <Switch>
          <div className="App">
           <Route path ="/" component ={Registration} exact />
           <Route path = "/HomePage" component ={HomePage}  />
          </div>
      </Switch>
    </BrowserRouter>
    <ToastContainer
    autoClose={2000}
    position="top-right"
    className="toast-container"
    toastClassName="dark-toast"
    />
    </Fragment>
  );
}

export default App;
