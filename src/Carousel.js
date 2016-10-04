import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import Coverflow from 'react-coverflow';


var Carousel = React.createClass({
  render: function(){
    return(
    <div className='carousel-1'>
    <h2>FEATURED ALBUMS</h2><br></br>
   <Coverflow
    width={960}
    height={480}
    displayQuantityOfSide={2}
    navigation={false}
    enableHeading={false}
    >
    <img src={require('./../images/album-1.png')} alt='Album one' />
    <img src={require('./../images/album-2.png')} alt='Album two' />
    <img src={require('./../images/album-3.png')} alt='Album three' />
    <img src={require('./../images/album-4.png')} alt='Album four'/>
    <img src={require('./../images/album-5.png')} alt='Album five'/>
    <img src={require('./../images/album-6.png')} alt='Album six'/>
    <img src={require('./../images/album-7.png')} alt='Album seven'/>
    <img src={require('./../images/album-8.png')} alt='Album eight'/>
    <img src={require('./../images/album-9.png')} alt='Album nine' />
  </Coverflow>
  </div>
  )
  }
})


ReactDOM.render(
  <Carousel />
  ,
  document.getElementById('root')
);

export default Carousel;