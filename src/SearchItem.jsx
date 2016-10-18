import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

var SearchItem = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-3 song-name search-item">
          <img src={this.props.albumImg} className="search-img"/>
          {this.props.songName}
        </div>
        <div className="col-md-3 artist search-item">
          {this.props.artist}
        </div>
        <div className="col-md-4 album search-item">
          {this.props.album}
        </div>
        <div className="col-md-1 price search-item">
          <button className="btn btn-default btn-xs buy" type="submit">{this.props.price}</button>
        </div>
        <div className="col-md-1 play search-item">
          <audio controls src={this.props.audio} />
        </div>
      </div>
    )
  }
})

export default SearchItem;
