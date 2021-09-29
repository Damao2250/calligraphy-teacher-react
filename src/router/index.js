import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./../App";
// import Login from "./../views/Login/Login";

// export const routes = [
//   {
//     title:"app",
//     path: "/",
//     name: "app",
//     component: App
//   },
//   {
//     title: "login",
//     name: "login",
//     path: "/login",
//     component: Login
//   }
// ]

class XRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/" component={App} />
        </Switch>
      </HashRouter>
    )
  }
}

export default XRouter