import React, { Component} from "react"
import { ConfigProvider} from "antd"
import zhCN from "antd/es/locale/zh_CN"
import { Provider } from "react-redux"
import store from "./store"
import Router from "./router"

class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ConfigProvider>
    )
  }
}

export default App;
