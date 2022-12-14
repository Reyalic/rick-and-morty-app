import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResidents = ({url}) => {
    
    const resident = useFetch(url)
    
    //console.log(resident)

  return (

    <article className='card-container'>
      <header>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
        <div>
          <div className='circle'></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className='card-list'>
        <h3>{resident?.name}</h3>
        <ul className='card-data'>
          <li><span>Species: </span>{resident?.species}</li>
          <li><span>Origin: </span>{resident?.origin.name}</li>
          <li><span>Episodes where appear: </span>{resident?.episode.length}</li>
        </ul>
      </div>  
    </article>

  )
}

export default CardResidents