/**
 * Created by TonyTong on 2017/3/5.
 */
import React from 'react';
var Router = require('react-router');
var Route = Router.Route;
const Home = ()=>{
    return <div><h3>{home}</h3></div>
};
const Message =()=>{
    return <div><h3>{message}</h3></div>
};
const Discover =()=>{
    return <div><h3>{discover}</h3></div>
};
const About =()=>{
    return <div><h3>{about}</h3></div>
};

// declare our routes and their hierarchy
var routes = (
    <Route handler={App}>
        <Route path="home" handler={Home}/>
        <Route path="message" handler={Message}/>
        <Route path="discover" handler={Discover}/>
        <Route path="about" handler={About}/>
    </Route>
);
var RouteHandler = Router.RouteHandler;
const App =()=>{
    return (
        <div>
            <h1>App</h1>
            <RouteHandler/>
        </div>
    )
};
export default App;