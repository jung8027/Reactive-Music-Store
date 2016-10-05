import React from 'react';


var Albums = React.createClass({
  propTypes: {
		songArtist: React.PropTypes.string,
		songAlbum:React.PropTypes.string,
		songImg: React.PropTypes.string,
    songPrice: React.PropTypes.string,
	},
  render: function() {
    var className = (this.props.className) ? this.props.className + ' albums' : 'albums';
    var details = [];

    if(this.props.songAlbum) details.push(<p>{this.props.songAlbum}</p>);
    if(this.props.songArtist) details.push(<p>{this.props.songArtist}</p>);
    if(this.props.songPrice) details.push(<p>{this.props.songPrice}</p>)
    if(this.props.faveTrack) details.push(<p>Fave Track: {this.props.faveTrack}</p>);

    return (
      <div className={className}>
        <img className="album" src={this.props.songImg}></img>
        {details}
      </div>
    )
  }
});

export default Albums;
