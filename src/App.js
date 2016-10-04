import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';
import AlbumTile from './AlbumTile'
import data from './data'
import './App.css'
import Carousel  from './Carousel'

var App = React.createClass({
    getInitialState: function(){
    return { albums: null, searchTerm: ''};
  }, 

  componentWillMount: function(){
    this.setState({albums: data.getFeatured()})
  },

  render: function(){
    return(
      <div>
       <Carousel />
    <div className="row">
     <AlbumTile albums={this.state.albums}/>
    </div>
    </div>
  )
  }
})


ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);