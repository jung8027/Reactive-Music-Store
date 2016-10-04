const React = require('react');
import Albums from './Albums';
import $ from 'jquery';

const AlbumTile = React.createClass({
  propTypes : {
		songs: React.PropTypes.array
	},
  render: function() {
    var data = this.props.albums;
    var albumInfo = [];
    for (var key in data){
      albumInfo.push(<Albums 
        songArtist={data[key].artist}
        songAlbum={data[key].albumTitle}
        songImg={data[key].cover}
        />)
    }

    return (
      <div>
        {albumInfo}
       </div>
    )
  }
});

export default AlbumTile;