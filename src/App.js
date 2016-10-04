import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar'
import Categories from './Categories'
import SearchBar from './Searchbar'
import './App.css'

var App = React.createClass({
  render: function() {
    return (
      <div>
       <SearchBar/>
       <Navbar />
       <Categories />
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
