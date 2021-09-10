import React from "react";
import Login from "../views/Login/Login";
import { HashRouter } from "react-router-dom"

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Login />
      </HashRouter>
    )
  }
}

export default Router