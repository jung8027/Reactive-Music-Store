import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import data from './data'
import AlbumTile from './AlbumTile.jsx'

var Deals = React.createClass({
  getInitialState: function() {
    return { albums: null};
  },
  componentWillMount: function() {
    this.setState({albums: this.props.albums})
  },
  render: function() {
    return(
      <div>
        <div className="row">
          <AlbumTile albums={data.getDeals()}/>
        </div>
      </div>
     )
  }
})

export default Deals;
