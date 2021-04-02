import React from 'react'
import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './components/Home'
import Symptoms from './components/Symptoms'
import Prevention from './components/Prevention'
import GlobalLive from './components/GlobalLive'
import IndiaLive from './components/IndiaLive'
import theme from "./styles/style"

import "./App.css"
import { ThemeProvider } from '@material-ui/styles'
const App = () => {
  return (
    <div className="App"> 
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/Symptoms" component={Symptoms} />
            <Route  path="/Prevention" component={Prevention} />
            <Route  path="/GlobalLive" component={GlobalLive} />
            <Route  path="/IndiaLive" component={IndiaLive} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
