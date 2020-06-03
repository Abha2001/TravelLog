import React,{useState, useEffect} from 'react';
import ReactMapGL from 'react-map-gl';
import placesList from './api/placesAPI';

function App() {
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
      console.log(places);
    })();
  },[]);

  return (
    <ReactMapGL
      // add you map style or remove it to use the default
      mapStyle={}
      // enter your mapboxAPIAccessToken
      mapboxApiAccessToken={}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default App;
