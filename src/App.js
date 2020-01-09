import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ResponsiveGeoMap } from '@nivo/geo'
import Countries from './world_countries'

function App() {
  console.log(Countries.features)
  return (
    <div className="App">
      <ResponsiveGeoMap
          features={ Countries.features }
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          projectionScale={181}
          projectionTranslation={[ 0.4, 0.5 ]}
          projectionRotation={[ 70, 360, 0 ]}
          fillColor="#eeeeee"
          borderWidth={1}
          borderColor="#333333"
          enableGraticule={true}
          graticuleLineColor="#666666"
      />
    </div>
  );
}

export default App;
