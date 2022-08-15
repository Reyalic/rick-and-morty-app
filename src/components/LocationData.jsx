import React from 'react'

const LocationData = ({location}) => {
  
  
  return (
  

  <article className='main-card'>
      <h2 className='card-title'>{location?.name}</h2>
      <ul className='card-data'>
        <li><span>Type: </span>{location?.type}</li>
        <li><span>Dimension: </span>{location?.dimension}</li>
        <li><span>Population: </span>{location?.residents.length}</li>
      </ul>
    </article>

    
  )
}

export default LocationData