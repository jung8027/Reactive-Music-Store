import React from 'react';
import {Router, Link} from 'react-router'


var Searchbar = React.createClass({
  getInitialState: function(){
    return {userInput: ""}
  },//intial state for the input tag
  handleChange: function(event){
      //change the state of the input var
    this.setState({userInput: event.target.value})
  },
  handleClick: function() {
    // if(this.state.userInput){
    //   Router.transitionTo('/song', {song: this.state.userInput});
    // }
  },
  render: function() {
    return (
      <div>
        <div className="row">
          <div>
            <div id="custom-search-input">
              <div className="input-group">
                <input type="text" className="input-lg" placeholder="Search music" onChange={this.handleChange}/>
                <span className="input-group-btn">
                  <Link to={"/song/" + this.state.userInput.split(' ').join('%20')}>
                    <button className="btn btn-info btn-lg" type="button" onClick={this.handleClick}>
                      <i className="fa fa-search"></i>
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})


export default Searchbar
