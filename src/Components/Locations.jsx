import { useState, useEffect } from 'react';
import { fetchJsonData } from '../utility';

function Locations() {
  const kantoLocations = [
    "https://pokeapi.co/api/v2/location/86/",
    "https://pokeapi.co/api/v2/location/154/",
    "https://pokeapi.co/api/v2/location/231/",
    "https://pokeapi.co/api/v2/location/68/",
    "https://pokeapi.co/api/v2/location/151/",
    "https://pokeapi.co/api/v2/location/232/",
    "https://pokeapi.co/api/v2/location/67/",
    "https://pokeapi.co/api/v2/location/76/",
    "https://pokeapi.co/api/v2/location/234/",
    "https://pokeapi.co/api/v2/location/71/",
    "https://pokeapi.co/api/v2/location/80/",
    "https://pokeapi.co/api/v2/location/136/",
    "https://pokeapi.co/api/v2/location/160/",
    "https://pokeapi.co/api/v2/location/498/",
    "https://pokeapi.co/api/v2/location/500/",
    "https://pokeapi.co/api/v2/location/506/",
    "https://pokeapi.co/api/v2/location/517/",
    "https://pokeapi.co/api/v2/location/811/",
    "https://pokeapi.co/api/v2/location/158/",
    "https://pokeapi.co/api/v2/location/504/"
  ];

  const [locationsData, setLocationsData] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const dataPromises = kantoLocations.map(url => fetchJsonData(url));
      const responses = await Promise.all(dataPromises);
      const locations = responses;//.map(response => response.names[1].name);
      setLocationsData(locations);
    };

    fetchLocations();
  }, []);

  return (
    <div className="locations">
      <h2>Locations</h2>
      <ul>
        {locationsData.map((location, index) => (
          <li id={kantoLocations[index]} key={index}>{location.names[1].name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Locations;