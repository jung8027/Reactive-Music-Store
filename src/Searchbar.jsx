import React from 'react';
import {Link} from 'react-router'


var Searchbar = React.createClass({
  getInitialState: function(){
    return {userInput: ""}
  },//intial state for the input tag
  inputChange: function(event){
      //change the state of the imput var
    this.setState({userInput: event.target.value})
  },
  submit: function(){
   
  },
  render: function() {
    return (
      <div class="container">
  <div class="row">
        <div class="col-md-6">
            <div id="custom-search-input">
                <div class="input-group col-md-12">
                    <input type="text" class="form-control input-lg" placeholder="Search music" />
                    <span class="input-group-btn">
                        <button class="btn btn-info btn-lg" type="button">
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
