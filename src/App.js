import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import data from './data.js';
import NewReleases from './NewReleases.jsx';
import Deals from './Deals.jsx';
import Footer from './Footer.jsx';
// import Coverflow from 'react-coverflow';
// import AlbumTile from './AlbumTile'
//import Carousel  from './Carousel'



var App = React.createClass({
  getState: function() {
    return {cart:{numOfItems: 0, items: []}}
  },
  render: function() {
    return (
      <div>
        <div className="banner">
          <img id="banner-img" src={require('./../images/ReactiveLogo.jpg')} />
        </div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#"></a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><Link to='/'>New Releases</Link></li>
                <li><Link to='deals'>Deals</Link></li>
                <li><Link to='#'>Popular Songs</Link></li>
                <li><Link to='#'>Popular Albums</Link></li>
                <li><Link to='#'>Staff Picks</Link></li>
              </ul>
            </div>
          </nav>


        <div id="page">
          {this.props.children}
          <Footer data={data.about}/>
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={NewReleases} />
      <Route path="deals" component={Deals} />
    </Route>
  </Router>,
  document.getElementById('root')
);
