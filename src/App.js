import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './Footer.jsx';
import data from './data.js';



var App = React.createClass({
  getState: function() {
    return {cart:{numOfItems: 0, items: []}}
  },
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#"></a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><Link to='#'>Home</Link></li>
                <li><Link to='/'>New Releases</Link></li>
                <li><Link to='#'>Popular Songs</Link></li>
                <li><Link to='#'>Deals</Link></li>
                <li><Link to='#'>Popular Albums</Link></li>
                <li><Link to='#'>Staff Picks</Link></li>
              </ul>
            </div>
          </nav>
        </div>

        <h1>Hello World!</h1>
        <Footer data={data.about}/>
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('root')
);
