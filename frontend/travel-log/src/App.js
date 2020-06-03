import React,{useState} from 'react';
import ReactMapGL from 'react-map-gl';

function App() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 24.1129,
    longitude: 77.2345,
    zoom: 4,
  });

  return (
    <ReactMapGL
      mapStyle={'mapbox://styles/abhajha/ckazrvvd202js1io946sfgcjl'}
      // enter your mapboxAPIAccessToken
      mapboxApiAccessToken={}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default App;
