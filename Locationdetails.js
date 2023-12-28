// LocationDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Locationdetails({ data, currentIndex }) {
    const category = useParams()
    // const category = match.params.category;
    return (
    <div>
      <h1>{category}Data Display</h1>
      {data.length > 0 && (
      <div className="grid-container">
          <div key={currentIndex} className={`box ${currentIndex % 2 === 0 ? 'even' : 'odd'}`}>
          <p className="property">{category}: {data[currentIndex][category]}</p>
          </div>
      </div>
       )}
       </div>
     );
      }

export default Locationdetails;
