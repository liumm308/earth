/**
 *@author  liumm308
 *@data  2020/06/20 10:03
 *@mail xidian_liu@163.com
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './index.css';
import App from './App';
const Test = function App() {
    return (
        <div>
         Holle World
        </div>
    );
};

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Product = () => (
    <div>
        <h2>Product</h2>
    </div>
)


ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
        </Route>
        <Route path="/index" component={Test}>
        </Route>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Product">Product</Link>
        <hr/>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/product" component={Product}></Route>
    </Router>,
    document.getElementById('root')
);
