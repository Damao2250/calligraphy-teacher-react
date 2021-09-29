import React from "react"
import { ConfigProvider} from "antd"
import zhCN from "antd/es/locale/zh_CN"
import { Provider } from "react-redux"
import store from "./store"
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./views/ClassManage/ClassManage";
import Login from "./views/Login/Login";

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </HashRouter>
      </Provider>
    </ConfigProvider>
  )
}

export default App;
