import { useState, useEffect } from 'react';
import { fetchJsonData } from '../utility';

function Locations({ setStage, setUserData }) {

  const [locationsData, setLocationsData] = useState([]);

  useEffect(() => {

    async function fetchLocationURLS () {
      const locationsArray = []
      const data = await fetchJsonData("https://pokeapi.co/api/v2/location");
      data.results.forEach((location) => {
        locationsArray.push(location.url)
      })
      return locationsArray;
    }

    const fetchLocations = async () => {
      const kantoLocations = await fetchLocationURLS()
      const dataPromises = kantoLocations.map(url => fetchJsonData(url));
      const responses = await Promise.all(dataPromises);
      const locations = responses;
      setLocationsData(locations);
    };

    fetchLocations();
  }, []);

  const handleLocationClick = (id) => {
    setUserData(prevState => ({
      ...prevState,
      chosenLocation: `https://pokeapi.co/api/v2/location/${id}`
    }));
    setStage('randomEncounter')//'randomEncounter');
  };

  return (
    <div className="locations">
      <h2>Locations</h2>
      <ul>
        {locationsData.map((location, index) => (
          <li 
            key={index}
            id={locationsData[index]}
            onClick={() => handleLocationClick(location.id)}
            className="location-item"
          >
            {location.names[1].name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Locations;