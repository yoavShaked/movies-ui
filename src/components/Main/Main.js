import { Route, Switch } from 'react-router-dom'
import React from 'react';
import Home from './../Home/Home';
import Auth from './../Auth/Auth';
import Feed from './../Feed/Feed';
import './style.css';


const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" render={() => { return (<Auth title="Login" btnText="Login" />) }} />
                <Route exact path="/signup" render={() => { return (<Auth signup title="Create Account" btnText="Sign Up" />) }} />
                <Route exact path="/feed" component={Feed} />
            </Switch>
        </div>
    );
};

export default Main;