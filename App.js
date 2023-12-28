// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [location, setLocation] = useState('Bengaluru');
//   const [data, setData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [authenticated, setAuthenticated] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/data/${location}`);
//         const result = await response.json();
//         setData(result);
//         setCurrentIndex(0); // Reset the index when fetching new data
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [location]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 10000);

//     return () => clearInterval(intervalId);
//   }, [data]);


//   const handleLogin = () => {
//     // Check if the entered credentials are correct
//     if (username === 'vishnupriya' && password === 'vishnu') {
//       setAuthenticated(true);
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       {authenticated ? (
//         <div>
//           <center><h1>AIR QUALITY INDEX</h1></center>
//           <div className="container">
//             <div className="location-list">
//               <h2>Locations</h2>
//               <ul>
//                 <li>
//                   <button onClick={() => setLocation('Bengaluru')}>Bengaluru</button>
//                 </li>
//                 <li>
//                   <button onClick={() => setLocation('Mumbai')}>Mumbai</button>
//                 </li>
//                 <li>
//                   <button onClick={() => setLocation('Chennai')}>Chennai</button>
//                 </li>
//                 <li>
//                   <button onClick={() => setLocation('Delhi')}>Delhi</button>
//                 </li>
//               </ul>
//             </div>

//             <div className="details">
//               {data.length > 0 && (
//                 <div className="grid-container">
//                   <div className="box">
//                     City: <br />
//                     {data[currentIndex].City}
//                   </div>
//                   <div className="box">
//                     Date: <br />
//                     {data[currentIndex].Date}
//                   </div>
//                   <div className="box">
//                     PM2.5: <br />
//                     {data[currentIndex]['PM2.5']}
//                   </div>
//                   <div className="box">
//                     PM10: <br />
//                     {data[currentIndex].PM10}
//                   </div>
//                   <div className="box">
//                     NO: <br />
//                     {data[currentIndex].NO}
//                   </div>
//                   <div className="box">
//                     NO2: <br />
//                     {data[currentIndex].NO2}
//                   </div>
//                   <div className="box">
//                     NOx: <br />
//                     {data[currentIndex].NOx}
//                   </div>
//                   <div className="box">
//                     NH3: <br />
//                     {data[currentIndex].NH3}
//                   </div>
//                   <div className="box">
//                     CO: <br />
//                     {data[currentIndex].CO}
//                   </div>
//                   <div className="box">
//                     SO2: <br />
//                     {data[currentIndex].SO2}
//                   </div>
//                   <div className="box">
//                     O3: <br />
//                     {data[currentIndex].O3}
//                   </div>
//                   <div className="box">
//                     AQI: <br />
//                     {data[currentIndex].AQI}
//                   </div>
//                   <div className="box">
//                     AQI Bucket: <br />
//                     {data[currentIndex].AQI_Bucket}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="log"><center>
//           <h1>Login</h1></center>
//           <label><center>
//             Username:
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </center></label>
//           <br />
//           <label><center>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </center></label>
//           <br />
//           <center><button onClick={handleLogin}>Login</button></center>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;