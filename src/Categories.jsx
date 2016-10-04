import React from 'react';
import {Link} from 'react-router'


var Categories = React.createClass({
  render: function() {
    return (


            <div className="sidebar-nav">
              <div className="navbar navbar-default" role="navigation">
                <div className="navbar-collapse collapse sidebar-navbar-collapse">
                  <ul className="nav navbar-nav">
                   <li className="genre"><Link to="/">Alternative</Link></li>
                   <li className="genre"><Link to="/">Christian & Gospel</Link></li>
                   <li className="genre"><Link to="/">Country</Link></li>
                   <li className="genre"><Link to="/">Pop</Link></li>
                   <li className="genre"><Link to="/">R&B</Link></li>
                   <li className="genre"><Link to="/">Rap & Hip-Hop</Link></li>
                   <li className="genre"><Link to="/">Rock</Link></li>
                  </ul>
                </div>
              </div>
            </div>



     )
  }
})

export default Categories;
