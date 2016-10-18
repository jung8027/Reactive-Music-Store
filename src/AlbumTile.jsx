import React from 'react';
import Albums from './Albums';
import data from './data.js';

const AlbumTile = React.createClass({
  propTypes: {
		songs: React.PropTypes.array
	},
  render: function() {
    var keys = this.props.albums;
    var albums = data.getAlbums();

    var albumInfo = keys.map(function(key){
      return <Albums songArtist={albums[key].artist}
              songAlbum={albums[key].albumTitle}
              songImg={albums[key].cover}
              albumId={key}
              />
    })


    return (
      <div className="flexcontainer">
        {albumInfo}
      </div>
    )
  }
});

export default AlbumTile;
