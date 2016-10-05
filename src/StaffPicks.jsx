import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import data from './data'
import Albums from './Albums.jsx'

var StaffPicks = React.createClass({
  getInitialState: function() {
    return {albums: data.getStaff()};
  },
  render: function() {
    var info=this.state.albums
    return(
      <div className="container-fluid text-center" >

        <img id="laurel-img" src={require('./../images/staff_picks.png')} />
        <br /> <br /><br /> <br />

        <div className="row staff">
          <div className="col-md-5">
            <Albums className="ambarAlbum" songImg={info.Ambar.cover} songAlbum={info.Ambar.albumTitle} songArtist={info.Ambar.artist} faveTrack={info.Ambar.faveTrack} />
            <img className="nametag" id="ambar" src={require('./../images/ambar_tag.png')} />
          </div>
          <div className="col-md-5">
            <Albums className="jungAlbum" songImg={info.Jung.cover} songAlbum={info.Jung.albumTitle} songArtist={info.Jung.artist} faveTrack={info.Jung.faveTrack} />
            <img className="nametag" id="jung" src={require('./../images/jung_tag.png')} />
          </div>
        </div>
        <br /> <br />
        <div className="row staff">
          <div className="col-md-5">
            <Albums className="rubenAlbum" songImg={info.Ruben.cover} songAlbum={info.Ruben.albumTitle} songArtist={info.Ruben.artist} faveTrack={info.Ruben.faveTrack} />
            <img className="nametag" id="ruben" src={require('./../images/ruben_tag.png')} />
          </div>
          <div className="col-md-5">
            <Albums className="salinaAlbum" songImg={info.Salina.cover} songAlbum={info.Salina.albumTitle} songArtist={info.Salina.artist} faveTrack={info.Salina.faveTrack} />
            <img className="nametag" id="salina" src={require('./../images/salina_tag.png')} />
          </div>
        </div>

      </div>
     )
  }
})

export default StaffPicks;
