import React from 'react';
function FeaturesCards({item}) {
  return (
    <div className='FeaturesCards'>
        <img src={item.icon} alt="cards" />
        <h3 className='fw-bold'>{item.title}</h3>
        <p>{item.desc}</p>
    </div>
  )
}

export default FeaturesCards