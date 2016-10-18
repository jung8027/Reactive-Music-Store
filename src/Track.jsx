import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


var Track = React.createClass({
	buttonClicked: function() {
    this.props.control(this.props.song);
  },
	render: function(){
		return(

			<div className="row twoListing">

				<div className="col-md-6">
					{this.props.title}
				</div>

	      <div className="col-md-2">
	        <button className="btn btn-default btn-xs buy" type="submit">{this.props.price}</button>
	      </div>

	      <div className="col-md-3">
	        <img  onClick={this.buttonClicked} src={require('./../images/play_button.png')} className="play" />
	      </div>
			</div>

		)
	}
});

export default Track;
