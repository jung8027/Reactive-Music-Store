import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import data from './data'
import Albums from './Albums.jsx' 


var Track = React.createClass({
	render: function(){
		return(

			<div className="row twoListing">
				
					<div className="col-md-6">
						{this.props.title}
		          	</div>

		          	<div className="col-md-2">
		          		<button className="btn btn-default btn-xs buy" type="submit">{this.props.price}</button>
					</div>
		      

		          	<div className="col-md-4">
		          	</div>
		          	
			</div>

		)
	}
});

export default Track;
