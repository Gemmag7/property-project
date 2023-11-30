import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ViewSellers(){

    let [sellers, setSellers] = useState([])
useEffect(() =>{ generateSellerList();
}, []);
    

function generateSellerList()
{
    fetch('http://localhost:3000/seller')
    .then((response)=>response.json())
    .then((data)=>{
        setSellers(data)});
}

    return(
        <>
        
        <table>
            <tbody>
            <tr>
                <th>UserID </th>
                <th>First Name</th>
                <th>Surname</th>
                <th>Address</th>
                <th>Postcode</th>
                <th>Phone No.</th>
                <th>Operations </th>
            </tr>
           {console.log(sellers)}
            {
                sellers.map( (X) =>
                <tr>
                    <td>{X.id}</td>
                    <td>{X.firstName}</td>
                    <td>{X.surname}</td>
                    <td>{X.address}</td>
                    <td>{X.postcode}</td>
                    <td>{X.phone}</td>
                    <Link to={`/seller/${X.id}`}> Delete</Link>
                </tr>
  ) 
            }
            </tbody>
        </table>
        
        </>
    )
}

export default ViewSellers;