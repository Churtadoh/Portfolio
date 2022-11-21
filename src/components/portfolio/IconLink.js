import React from 'react';

function IconLink(props) {
   const {link, title, icon} = props;
   return (
         <i className={icon}> {title} </i>
   );
}

export default IconLink;