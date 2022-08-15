import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationData from './components/LocationData'
import CardResidents from './components/CardResidents'


function App() {
  
  const [getInput, setGetInput] = useState('')
  const [location, setLocation] = useState()
  
  
  useEffect(() => {
    let randomLocation = Math.floor(Math.random() * (126 - 1) + 1)
    if (getInput === '') {
      randomLocation
    } else {
      randomLocation = getInput
    }


    let URL = `https://rickandmortyapi.com/api/location/${randomLocation}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
  }, [getInput])

  let handleSubmit = e => {
    e.preventDefault()
    setGetInput(e.target.search.value)
  }

  return (
    <section className="App">
      <header className='header'>
        <div className='main-title'>
        <h1>Rick and Morty</h1>
        </div>
      </header>
      

      <form onSubmit={handleSubmit}>
        <input id='search' type="text" placeholder='type a locatio ID'/>
        <button>Search</button>
      </form>
     

      <LocationData location={location}/>
      
      <div className='content'>
        {
          location?.residents.map(url => (
            <CardResidents
            key={url}
            url={url}
            />
          ))
        }
      </div>
    </section> 
  )
}

export default App

