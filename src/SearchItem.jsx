import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

var SearchItem = React.createClass({
  //<audio controls src={this.props.audio} />
  getInitialState: function() {
    return {audio: new Audio(this.props.audio)}
  },
  buttonClicked: function() {
    this.props.control(this.props.audio);
    console.log(this.props.artist + ': ' + this.props.audio)
    //this.props.control(this.props.audio)
  },
  componentWillReceiveProps: function() {
    this.setState({audio: new Audio(this.props.audio)})
  },
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
          <img onClick={this.buttonClicked} src= {require('./../images/play_button.png')} className="play" />
        </div>
      </div>
    )
  }
})

export default SearchItem;
