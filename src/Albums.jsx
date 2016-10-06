import React from 'react';
import {Link} from 'react-router'


var Albums = React.createClass({
  propTypes: {
		songArtist: React.PropTypes.string,
		songAlbum: React.PropTypes.string,
		songImg: React.PropTypes.string,
    songPrice: React.PropTypes.string,
    albumId: React.PropTypes.string
	},
  render: function() {
    var className = (this.props.className) ? this.props.className + ' albums' : 'albums';
    var details = [];

    if(this.props.songAlbum) details.push(<p id="albumBold">{this.props.songAlbum}</p>);
    if(this.props.songArtist) details.push(<div className="albumInfo">{this.props.songArtist}</div>);
    if(this.props.songPrice) details.push(<div className="albumInfo">{this.props.songPrice}</div>)
    if(this.props.faveTrack) details.push(<div className="albumInfo">Fave Track: {this.props.faveTrack}</div>);

    return (
      <div className={className}>
        <Link to={"/album/" + this.props.albumId}><img className="album" src={this.props.songImg}></img></Link>
        {details}
      </div>
    )
  }
});

export default Albums;
