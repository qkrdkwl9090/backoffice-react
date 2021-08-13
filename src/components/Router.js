import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "routes/home";
// import Header from "Components/Header";

const PageRouter = () => (
    <Router>
        {/* <Header/> */}
        <Switch>
            <Route path="/" exact component={Home}/>
            <Redirect from="*" to="/"/>
        </Switch>
        
    </Router>
)
export default PageRouter;