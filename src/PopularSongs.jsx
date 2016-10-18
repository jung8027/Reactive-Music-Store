import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import data from './data';
import AlbumTile from './AlbumTile.jsx';

var PopularSongs = React.createClass({
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
        <div className="row">
          <AlbumTile albums={this.state.albums}/>
        </div>
      </div>
     )
  }
})

export default PopularSongs;
