import React from 'react';
import {Router} from 'react-router';
import $ from 'jquery';
import SearchItem from './SearchItem.jsx';

var Search = React.createClass({
  getInitialState: function() {
    return {searchContent: [], noResults: false}
  },
  componentWillMount: function() {
    //pauses any music playing when switched to this page
		this.props.pauseOnPageChange();

    this.getSearchResults(this.props.params.songName);
  },
  componentWillReceiveProps: function(props) {
    this.getSearchResults(props.params.songName);
  },
  getSearchResults: function(searchFor) {

    var searchWord = searchFor.split(' ').join('+');

    $.ajax({
      url: 'https://api.spotify.com/v1/search?q=' + searchWord + '&type=track&limit=20',
      success: function(data) {
        var togglePlay = this.props.togglePlay;
        var searchItems = data.tracks.items.map(function(song){
          var price = (song.popularity > 65) ? '$1.29' : '$0.99';

          return <SearchItem albumImg={song.album.images[1].url} songName={song.name} artist={song.artists[0].name}
                  album={song.album.name} price={price} audio={song.preview_url} control={togglePlay}/>
        })

        var noResults = false;

        //check if search returns 0 results
        if (searchItems.length === 0) noResults = true;

        this.setState({searchContent: searchItems, noResults: noResults})

      }.bind(this)
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
  render: function() {

    var display = (
      <div>
        <hr />
        <div className="row">
          <div className="col-md-3 song-name search-labels">
            Name
          </div>
          <div className="col-md-3 artist search-item search-labels">
            Artist
          </div>
          <div className="col-md-4 album search-item search-labels">
            Album
          </div>
          <div className="col-md-1 price search-item search-labels">
            Price
          </div>
        </div>
        <hr />
        {this.state.searchContent}
      </div>
    )


    return (this.state.noResults) ? null : display
  }
})

export default Search
