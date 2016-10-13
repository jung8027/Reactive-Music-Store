import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import data from './data'
import Albums from './Albums.jsx'


var Track = React.createClass({
	render: function(){
		return(

			<div className="row twoListing">

				<li className="col-md-9">
					{this.props.title}
	          	</li>

	          	<div className="col-md-1">
	          		<button className="btn btn-default btn-xs buy" type="submit">{this.props.price}</button>
	          	</div>

	          	<div className="col-md-2">
	          		<img src= {require('./../images/play_button.png')} className="play" />
	          	</div>

			</div>

		)
	}
});

export default Track;
 