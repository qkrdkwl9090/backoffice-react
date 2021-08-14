import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "routes/home";
import DrawerLeft from "components/DrawerLeft";

const PageRouter = () => (
    <Router>
        <DrawerLeft/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Redirect from="*" to="/"/>
        </Switch>
        
    </Router>
)
export default PageRouter;