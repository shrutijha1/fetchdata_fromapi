import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Fetchdata() {
    const [data, setData] = useState([])
    useEffect(() =>{
        axios.get('https://api.postalpincode.in/pincode/110078')
        .then(res => co(res.data))
        .catch(err => console.log(err));
    },[])
  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>data</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Branch</th>
                    <th>delivery status</th>
                    <th>circle</th>
                    <th>destrict</th>
                    <th>devision</th>
                    <th>region</th>
                    <th>block</th>
                    <th>state</th>
                    <th>country</th>
                    <th>pincode</th>
                </tr>
            </thead>
            <tbody>
                {
                  data.map((user,index) =>{
                        return<tr key={index}>
                            <td>{user.Name}</td>
                            <td>{user.Description}</td>
                            <td>{user.BranchType}</td>
                            <td>{user.DeliveryStatus}</td>
                            <td>{user.Circle}</td>
                            <td>{user.Destrict}</td>
                            <td>{user.Division}</td>
                            <td>{user.Region}</td>
                            <td>{user.Block}</td>
                            <td>{user.State}</td>
                            <td>{user.Country}</td>
                            <td>{user.Pincode}</td>
                        </tr>
                    }
                    )
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Fetchdata
