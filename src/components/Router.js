import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "routes/home";
import Account from "routes/account";
import Company from "routes/company";
import Product from "routes/product";
import DrawerLeft from "components/Drawer/DrawerLeft";
import DrawerRight from "components/Drawer/DrawerRight";

const PageRouter = () => (
    <Router>
        <DrawerLeft/>
        <DrawerRight/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/account" component={Account}/>
            <Route path="/company" component={Company}/>
            <Route path="/product" component={Product}/>
            <Redirect from="*" to="/"/>
        </Switch>
        
    </Router>
)
export default PageRouter;