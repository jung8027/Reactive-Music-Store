import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import $ from 'jquery';

const Albums = React.createClass({
   propTypes: {
		songArtist: React.PropTypes.string,
		songAlbum:React.PropTypes.string,
		songImg: React.PropTypes.string,
    songPrice: React.PropTypes.string,
	},
  render: function() {
    return (
      <div className="col-md-3">
      <img src={this.props.songImg}></img>
        <p>{this.props.songAlbum}</p>
        <p>{this.props.songArtist}</p>
        <p>{this.props.songPrice}</p>
       </div> 
    )
  }
});

export default Albums;