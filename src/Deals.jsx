import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import data from './data'
import AlbumTile from './AlbumTile.jsx'

var Deals = React.createClass({
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
