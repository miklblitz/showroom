 import React from 'react';
 import './menu-item.style.scss';

 const MenuItem = (props) =>(
   <div className='menu-item'>
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

 export default MenuItem;