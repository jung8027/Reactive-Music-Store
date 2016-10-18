import React from 'react';
// import {Router, Route, Link, hashHistory} from 'react-router';
// import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
// import Coverflow from 'react-coverflow';
import './App.css'
import data from './data'
import Carousel  from './Carousel.jsx'
import AlbumTile from './AlbumTile.jsx'

var NewReleases = React.createClass({
  getInitialState: function() {
    return { albums: null, searchTerm: ''};
  },
  componentWillMount: function() {
    //pauses any music playing when switched to this page
		this.props.pauseOnPageChange();
    
    this.setState({albums: data.getFeatured()})
  },
  render: function() {
    return(
      <div>
        <Carousel id="featured-carousel"/>
        <div className="row">
          <AlbumTile albums={this.state.albums}/>
        </div>
      </div>
     )
  }
})

export default NewReleases;
