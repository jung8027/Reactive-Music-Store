import React from 'react';

var Footer = React.createClass({
  render: function() {
    var footerData = [];
    var storeData = this.props.data;

    for(var key in storeData){
      footerData.push(<li key={key}>{storeData[key]}</li>)
    }

    return (
      <ul id="footer">
        {footerData}
      </ul>
    )
  }
})


export default Footer;
