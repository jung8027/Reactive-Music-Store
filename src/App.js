import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import data from './data.js';
import Navbar from './Navbar.jsx'
import NewReleases from './NewReleases.jsx';
import Deals from './Deals.jsx';
import Categories from './Categories.jsx'
import Footer from './Footer.jsx';
import StaffPicks from './StaffPicks.jsx';



var App = React.createClass({
  getState: function() {
    return {cart:{numOfItems: 0, items: []}}
  },
  render: function() {
    return (
      <div>
        <div className="banner">
          <img id="banner-img" src={require('./../images/reactiveLogo.png')} />
        </div>

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#"></a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to='/'>New Releases</Link></li>
              <li><Link to='deals'>Deals</Link></li>
              <li><Link to='#'>Popular Songs</Link></li>
              <li><Link to='#'>Popular Albums</Link></li>
              <li><Link to='staffpicks'>Staff Picks</Link></li>
            </ul>
          </div>
        </nav>

        <div className="container sidebar-divs ">
          <div className="row sidebar-divs ">
            <div className="col-sm-2 sidebar-divs ">
              <Categories />
            </div>
            <div className="col-sm-10">
              <div id="page">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>

        <Footer id="footer" data={data.about}/>
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={NewReleases} />
      <Route path="deals" component={Deals} />
      <Route path="staffpicks" component={StaffPicks} />
    </Route>
  </Router>,
  document.getElementById('root')
);
