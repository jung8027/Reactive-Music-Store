import React from 'react';


var Albums = React.createClass({
  propTypes: {
		songArtist: React.PropTypes.string,
		songAlbum:React.PropTypes.string,
		songImg: React.PropTypes.string,
    songPrice: React.PropTypes.string,
	},
  render: function() {
    return (
      <div className="albums">
        <img className="album" src={this.props.songImg}></img>
        <p>{this.props.songAlbum}</p>
        <p>{this.props.songArtist}</p>
        <p>{this.props.songPrice}</p>
      </div>
    )
  }
});

export default Albums;
