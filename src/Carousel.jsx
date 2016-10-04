import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import Coverflow from 'react-coverflow';
import './App.css';


var Carousel = React.createClass({
  render: function(){
    return(
      <div className='carousel-1'>
        <h2>FEATURED ALBUMS</h2>
        <br></br>
        <Coverflow
          width={960}
          height={250}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
        >
          <img className="album" src={require('./../images/album-1.png')} alt='Album one' />
          <img className="album" src={require('./../images/album-2.png')} alt='Album two' />
          <img className="album" src={require('./../images/album-3.png')} alt='Album three' />
          <img className="album" src={require('./../images/album-4.png')} alt='Album four'/>
          <img className="album" src={require('./../images/album-5.png')} alt='Album five'/>
          <img className="album" src={require('./../images/album-6.png')} alt='Album six'/>
          <img className="album" src={require('./../images/album-7.png')} alt='Album seven'/>
          <img className="album" src={require('./../images/album-8.png')} alt='Album eight'/>
          <img className="album" src={require('./../images/album-9.png')} alt='Album nine' />
        </Coverflow>
      </div>
     )
  }
})


export default Carousel;
