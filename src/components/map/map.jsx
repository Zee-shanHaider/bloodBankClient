import {React, useState} from 'react'
import {useJsApiLoader, GoogleMap, Marker, Autocomplete} from '@react-google-maps/api'
import './map.style.css'
export const Map = () => {
  const [map,setMap] = useState(null);
  console.log(map)
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.React_App_Google_Maps_Api_Key,
    libraries: ['places'],
  })
  if(isLoaded){
    <h1>map is loading</h1>
  }

  const Initial_Values = {
    origin:'',
    destination: '', 
  }
  const [formValues, setFormValues] = useState(Initial_Values)
  console.log('formValues',formValues)
  const changeHandler =(e)=>{
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
  }
  const center = {lat: 48.8584, lng: 2.2945}
  return (
    <div className='container' >
        <div className='search'>
          <Autocomplete>
            <input type="text" name='origin' className='input' onChange={changeHandler} placeholder='Enter origin..' value={formValues.origin}/>
          </Autocomplete>
          <Autocomplete>
            <input type="text" name='destination' className='input' placeholder='Enter destination..' onChange={changeHandler} value={formValues.destination}/>
          </Autocomplete>
            <button className='btn'>Calculate Route </button>
            <button onClick={()=>map.panTo(center)}><i className="fa fa-location-arrow" aria-hidden="true"></i></button>
        </div>
        <div className='spans'>
              Duration: <span></span>
              Distance: <span></span>
              <button><i className="fa fa-times"></i></button>
        </div>
        <div style={{'width': '100vh', 'height': '100vh'}} className='mapContainer'>
            <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{'width': '100%', 'height': '100%'}}
            options={{
              zoomControl:false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false
            }}
            onLoad={(map)=>setMap(map)}  
            >
         <Marker position={center}/>

            </GoogleMap>
        </div>

         
      
    </div>
  )
}
