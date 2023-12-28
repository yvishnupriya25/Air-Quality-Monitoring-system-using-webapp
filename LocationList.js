import React, { useState, useEffect,useCallback } from 'react';

function LocationList({ match }) {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/data/${match.params.city}`);
      const result = await response.json();
      setData(result);
      setCurrentIndex(0); // Reset the index when fetching new data
    } catch (error) {
      console.error('Error fetching data:', error);
    }},[match.params.city]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [data]);

  

  return (
    <div>
      <h2>{match.params.city} Data Display</h2>
      {data.length > 0 && (
        <div className="grid-container">
          <div key={currentIndex} className={`box ${currentIndex % 2 === 0 ? 'even' : 'odd'}`}>
            <p className="property">City: {data[currentIndex].City}</p>
            <p className="property">Date: {data[currentIndex].Date}</p>
            <p className="property">PM2.5: {data[currentIndex]['PM2.5']}</p>
            <p className="property">PM10: {data[currentIndex].PM10}</p>
            <p className="property">NO: {data[currentIndex].NO}</p>
            <p className="property">NO2: {data[currentIndex].NO2}</p>
            <p className="property">NOx: {data[currentIndex].NOx}</p>
            <p className="property">NH3: {data[currentIndex].NH3}</p>
            <p className="property">CO: {data[currentIndex].CO}</p>
            <p className="property">SO2: {data[currentIndex].SO2}</p>
            <p className="property">O3: {data[currentIndex].O3}</p>
            <p className="property">AQI: {data[currentIndex].AQI}</p>
            <p className="property">AQI Bucket: {data[currentIndex].AQI_Bucket}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocationList;
