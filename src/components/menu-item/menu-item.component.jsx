 import React from 'react';
 import { withRouter } from 'react-router-dom';

 import './menu-item.style.scss';

 const MenuItem = (props) =>(
   <div 
    className='menu-item' 
    onClick={
      () => props.history.push(`${props.match.url}${props.linkUrl}`)
    }
   >
      <div 
        className='background-image'
        style={{
          backgroundImage: `url(${props.imageUrl})`
        }}
      >
     </div>

     <div className='content'>
       <h1 className='title'>{props.title}</h1>
       <span className='show-room'>Show Room</span>
     </div>
   </div>
 )

 export default withRouter(MenuItem);