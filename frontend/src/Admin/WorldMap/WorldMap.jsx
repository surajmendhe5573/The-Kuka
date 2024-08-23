import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl =
  'https://unpkg.com/world-atlas@2.0.2/countries-110m.json';

const WorldMap = () => {
  const countries = [
    { name: 'United States', coordinates: [-100.0, 40.0] },
    { name: 'India', coordinates: [78.96, 20.59] },
    { name: 'Brazil', coordinates: [-51.92, -14.23] },
  ];

  return (
    <div className='w-[278px] h-[200px] md:-mt-12 flex justify-center mx-auto  '>

    
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} style={{
                default: {
                  fill: '#DBDBDB', // Pink color for the map
                  outline: 'none',
                },
                hover: {
                  fill: '#25304c', // Darker pink when hovered
                  outline: 'none',
                },
              }}  />
          ))
        }
      </Geographies>
      {countries.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="red" />
        </Marker>
      ))}
    </ComposableMap>
    </div>
  );
};

export default WorldMap;