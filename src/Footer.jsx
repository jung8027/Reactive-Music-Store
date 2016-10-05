import React from 'react';

var Footer = React.createClass({
  render: function() {
    var className = (this.props.className) ? this.props.className : "";
    var id = (this.props.id) ? this.props.id : "";
    var footerData = [];
    var storeData = this.props.data;

    for(var key in storeData){
      footerData.push(<li key={key}>{storeData[key]}</li>)
    }

    return (
      <ul className={className} id={id}>
        {footerData}
      </ul>
    )
  }
})


export default Footer;
