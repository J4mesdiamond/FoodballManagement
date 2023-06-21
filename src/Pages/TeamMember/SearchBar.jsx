// import React, { useState } from 'react'

// export const SearchBar = ({ setResults }) => {
//     const [input, setInput] = useState("");

//     const GetEmployeeData = (response) =>{
//         //here we will get all employee data
//         const url = 'http://localhost:5000/player'
//         .then((response) => response.json())
//         .then((json) => {
//             const results = json.filter((user) => {
//             return (
//                 playerName &&
//                 position &&
//                 goals &&
//                 assists.toLowerCase().includes(value)
//             );
//             });
//             setResults(results);
//         });
//     }
//     const handleChange = (value) => {
//         setInput(value);
//         GetEmployeeData(value);
//     };

//     return (
//         <div>
//             <div className="mininav">
//                 <input type="text" name="" 
//                 id=""
//                 value={input} 
//                 placeholder='Search here..............' 
//                 onChange={(e) => handleChange(e.target.value)}
//                 />
//             </div>
//         </div>
//     )
// }

