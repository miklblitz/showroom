 import React from 'react';
 import MenuItem from '../menu-item/menu-item.component';
 import './directory.style.scss';

 class Directory extends React.Component {

  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'vaz',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'room/vaz'
        },
        {
          title: 'mazda',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'room/mazda'
        },
        {
          title: 'lexus',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'room/lexus'
        },
        {
          title: 'bmw',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'room/bmw'
        },
        {
          title: 'lexus',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'room/lexus'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({id, ...otherSectionProps})=>(
            <MenuItem 
            key={id} 
              {...otherSectionProps}
            />
          ))
        }
      </div>
    )
  }

 }

export default Directory;