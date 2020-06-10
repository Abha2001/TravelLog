import React,{useState, useEffect} from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';
import placesList from './api/placesAPI';

function App() {
  const [Places, setPlaces]=useState([]);

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 24.1129,
    longitude: 77.2345,
    zoom: 4,
  });

  useEffect(()=>{
    (async()=>{
      const places=await placesList();
      setPlaces(places);
    })();
  },[]);

  return (
    <ReactMapGL
      // add you map style-url or remove it to use the default
      mapStyle={"mapbox://styles/abhajha/ckazrvvd202js1io946sfgcjl"}
      // enter your mapboxAPIAccessToken
      mapboxApiAccessToken={"pk.eyJ1IjoiYWJoYWpoYSIsImEiOiJja2F6cGU4YjIwMGNnMnVudm1pbnV0cjY5In0.ePA6gjeugX4bFrknSy7Nvg"}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {Places.map((place)=>{
        return(
          <Marker latitude={place.latitude} 
          key={place._id}
          longitude={place.longitude} 
          offsetLeft={-20} 
          offsetTop={-10}>
          <svg 
            viewBox="0 0 24 24" 
            width="28" 
            height="28" 
            stroke="red" 
            stroke-width="2" 
            fill="red" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            class="css-i6dzq1">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </Marker>
        )
      })}
    </ReactMapGL>
  );
}

export default App;
