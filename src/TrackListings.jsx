import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import data from './data'
import Albums from './Albums.jsx'
import Track from './Track.jsx'


var TrackListings = React.createClass({
	getInitialState: function (){
		return {albumId: this.props.params.albumId}
	},
	render: function(){
		var album = data.getAlbums()[this.state.albumId];
		var songs = album.songs;

		var tracks = songs.map(function(song){
			return <Track title={song.songTitle} price={song.price} />
		})

		return(
			<div className="container-fluid">
				<div className="row oneListing">
					<div className="col-md-6">
						<img src={album.cover} />
					</div>

					<div className="col-md-6">
						<br /> <br /> <br />
						<h1> {album.albumTitle}</h1>
						<h4>{album.artist}</h4>
						<br />
						<button className="btn btn-default buy" type="submit">Buy MP3 Album {album.albumPrice}</button>
					</div>
				</div>
				<br /> <br />

				<div className="row twoListing">

					<div className="col-md-6">
						<h5>Tracks:</h5>
		          	</div>

				</div>
				<ol>
				{tracks}
				</ol>
			</div>

		)
	}
});

export default TrackListings;
