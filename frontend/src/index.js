import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch } from "react-router-dom";

const app = (
  <BrowserRouter>
    <Switch>
      <App path="/" exact />
      <CreatePost path="/create-post" exact />
      <Login path="/login" exact />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
