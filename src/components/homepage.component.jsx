import React from 'react';
import './homepage.style.scss';

const HomePage = () => (
  <div className="homepage">
    <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Vaz</h1>
            <span className='show-room'>Show Room</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Mazda</h1>
            <span className='show-room'>Show Room</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Volvo</h1>
            <span className='show-room'>Show Room</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Bmw</h1>
            <span className='show-room'>Show Room</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Mersedes</h1>
            <span className='show-room'>Show Room</span>
          </div>
        </div>
    </div>
  </div>
)

export default HomePage;