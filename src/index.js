import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {HashRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context"
ReactDOM.render(
    <ContextProvider>
        <Router>
        <App />
        </Router>
    </ContextProvider>
, document.getElementById("root"))