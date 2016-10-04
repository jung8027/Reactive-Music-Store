import React from 'react';
import {Link} from 'react-router'


var Categories = React.createClass({
  render: function() {
    return (
      <div className="row unstyled" >
      <h3>Genre</h3>
      <ul>
         <li><Link to="/">Alternative</Link></li>
         <li><Link to="/">Christian & Gospel</Link></li>
         <li><Link to="/">Country</Link></li>
         <li><Link  to="/">Pop</Link></li>
         <li><Link to="/">R&B</Link></li>
         <li><Link to="/">Rap & Hip-Hop</Link></li>
      </ul>

      <div className="boxdiv">
      <p>other information</p>
      </div>

      </div>
    )
  }
})

export default Categories;
	