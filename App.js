import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  useEffect(() => {
    const [coulmn , setCoulmn]= useState([])
    const [records, setRecords]= useState([])
    fetch('https://api.postalpincode.in/pincode/110078')
    .then(res => res.json())
    .then(data =>{
      setCoulmn(Object.keys(data.users[0]))
      setRecords(data.users)

    })
  },[])
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {column.map((c,i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            records.map((record,i) => (
              <tr key={i}>
                <td>{record.id}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
