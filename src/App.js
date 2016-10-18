import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import data from './data.js';
import Navbar from './Navbar.jsx'
import NewReleases from './NewReleases.jsx';
import Deals from './Deals.jsx';
import Categories from './Categories.jsx'
import Footer from './Footer.jsx';
import Searchbar from './Searchbar.jsx';
import Search from './Search.jsx';
import StaffPicks from './StaffPicks.jsx';
import PopularAlbums from './PopularAlbums.jsx'
import PopularSongs from './PopularSongs.jsx'
import TrackListings from './TrackListings.jsx'

var App = React.createClass({
  getInitialState: function() {
    return {search:"", cart:{numOfItems: 0, items: []}, songPlaying: null, playing: false}
  },
  setSearch: function(searchWord) {
    this.setState({search: searchWord})
  },
  togglePlay: function(songClicked) {
    //console.log(this)
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
  pauseOnPageChange: function() {
    if(this.state.playing) {
      this.state.songPlaying.pause();
      this.setState({playing: false});
    }
  },
  render: function() {
    return (
      <div>
        <div className="banner">
          <img id="banner-img" src={require('./../images/reactiveLogo.png')} />
        </div>

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#"></a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to='/'>New Releases</Link></li>
              <li><Link to='deals'>Deals</Link></li>
              <li><Link to='popularsongs'>Popular Songs</Link></li>
              <li><Link to='popularalbums'>Popular Albums</Link></li>
              <li><Link to='staffpicks'>Staff Picks</Link></li>
              <li className="searchbar"><Searchbar setSearch={this.setSearch}/></li>
            </ul>
          </div>
        </nav>

        <div className="container sidebar-divs ">
          <div className="row sidebar-divs ">
            <div className="col-sm-2 sidebar-divs ">
              <Categories />
            </div>
            <div className="col-sm-10">
              <div id="page">
                {React.cloneElement(this.props.children, {togglePlay: this.togglePlay,
                  pauseOnPageChange: this.pauseOnPageChange})}
              </div>
            </div>
          </div>
        </div>

        <hr id="footer-hr"/>
        <Footer id="footer" data={data.about}/>
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={NewReleases} />
      <Route path="deals" component={Deals} />
      <Route path="popularalbums" component={PopularAlbums} />
      <Route path="popularsongs" component={PopularSongs} />
      <Route path="staffpicks" component={StaffPicks} />
      <Route path="/album/:albumId" component={TrackListings} />
      <Route path="/song/:songName" component={Search} />
    </Route>
  </Router>,
  document.getElementById('root')
);
