import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Architect from "./components/Architect";
import React from "react";

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/architects/:id?' component={Architect}/>
            </Switch>
        </main>
    );
}

export default Main;