 import React from 'react';
 import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSIgnIn, ...otherProps}) =>(
  <button className={`${isGoogleSIgnIn ? 'google-sign-in' : '' } custom-button`} {...otherProps}>
    {children}
  </button>
 )

export default CustomButton;