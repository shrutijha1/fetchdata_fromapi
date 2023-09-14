import React from "react";

function Postal ({postalData}){
  return (
    <React.Fragment>
        {
            postalData.map((uData,index) =>(
                <tr key={index}>
                <td>    {uData.Name}   </td>
                <td>    {uData.Description}   </td>
                <td>    {uData.BranchType}   </td>
                <td>    {uData.DeliveryStatus}   </td>
                <td>    {uData.Circle}   </td>
                <td>    {uData.District}   </td>
                <td>    {uData.Divison}   </td>
                <td>    {uData.Block}   </td>
                <td>    {uData.State}   </td>
                <td>    {uData.Country}   </td>
                <td>    {uData.Pincode}   </td>
                </tr>
            )
            )
        }
    </React.Fragment>
  )
}

export default Postal
