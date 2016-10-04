import React from 'react';
import {Link} from 'react-router'


var Searchbar = React.createClass({
  getInitialState: function(){
    return {userInput: ""}
  },//intiall state for the input tag
  inputChange: function(event){
      //change the state of the imput var
    this.setState({userInput: event.target.value})
  },
  submit: function(){
    //to call on the button onclick 
  },
  render: function() {
    return (
      <div>
        <h1>Hello World!</h1>
        <input type="text" name="input" className="form-control" placeholder= "Search a song or album " value={this.state.userInput} onChange={this.inputChange} />
        <button onClick={this.submit}><i className="fa fa-search"></i></button>
      </div>
    )
  }
})


export default Searchbar
