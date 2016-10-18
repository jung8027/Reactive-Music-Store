import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
import './App.css'
import data from './data'
import Albums from './Albums.jsx'
import Track from './Track.jsx'


var TrackListings = React.createClass({
	getInitialState: function (){
		return {albumId: this.props.params.albumId, albumAudio: [], songPlaying: null, playing: false}
	},
	componentWillMount: function() {
    this.getAudio(this.state.albumId);
  },
  getAudio: function(albumId) {
    var that = this;
    $.ajax({
      url: 'https://api.spotify.com/v1/albums/' +albumId+'/tracks',
      success: function(data){
        var listings = []

				for (var i = 0; i< data.items.length; i++){
          listings.push(data.items[i].preview_url)
        }

				that.setState({albumAudio: listings})
      }
    })
  },
	togglePlay: function(songClicked) {
    var playing = this.state.playing;
    var prevClickedSong = this.state.songPlaying;
    var prevClickedSongSrc = (prevClickedSong) ? prevClickedSong.src : null;

    if(songClicked === prevClickedSongSrc) {
      if(playing){
        prevClickedSong.pause()
        this.setState({playing: false});
      } else {
        prevClickedSong.play()
        this.setState({playing: true});
      }
    } else if(songClicked !== prevClickedSongSrc) {
      if(prevClickedSong !== null) prevClickedSong.load();

      var newSong = new Audio(songClicked);
      newSong.play();
      this.setState({songPlaying: newSong, playing: true})
    }
  },
	render: function(){
		var album = data.getAlbums()[this.state.albumId];
	 	var songs = album.songs;
		var state = this.state;
		var togglePlay = this.togglePlay;
		var tracks = songs.map(function(song, indx){
			return <Track title={song.songTitle} price={song.price} song={state.albumAudio[indx]} control={togglePlay}/>
		});
		//console.log(this.state.albumAudio);

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

				{tracks}

			</div>

		)
	}
});

export default TrackListings;
