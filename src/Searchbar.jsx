import React from 'react';
import {Link} from 'react-router'


var Searchbar = React.createClass({
  getInitialState: function(){
    return {userInput: ""}
  },//intial state for the input tag
  inputChange: function(event){
      //change the state of the input var
    this.setState({userInput: event.target.value})
  },
  submit: function(){
   
  },
  render: function() {
    return (
      <div>
        <div className="row">
          <div>
            <div id="custom-search-input">
              <div className="input-group">
                <input type="text" className="input-lg" placeholder="Search music" />
                <span className="input-group-btn">
                  <button className="btn btn-info btn-lg" type="button">
                    <i className="fa fa-search"></i>
                  </button>
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