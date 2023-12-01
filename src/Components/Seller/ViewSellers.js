import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import './Seller.css'

function ViewSellers(){

    let [sellers, setSellers] = useState([])
useEffect(() =>{ generateSellerList();
}, []);
    
function DeleteSeller(X){

   // let {id} = useParams()
     fetch(`http://localhost:3000/seller/${X.id}`, {
      
        method:"DELETE", 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: X.id}),
       
    }).then((res) => res.json());
    
    generateSellerList()
}

function EditSeller(X){
    let editBtn = document.getElementById("editBtn")
    if (editBtn.value=="Edit"){
        //editBtn.value=="Save";
        //editRecords(X)
    }
    // let {id} = useParams()
      fetch(`http://localhost:3000/seller/${X.id}`, {
       
         method:"DELETE", 
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({id: X.id}),
        
     }).then((res) => res.json());
     generateSellerList()
 }

function generateSellerList()
{
    fetch('http://localhost:3000/seller')
    .then((response)=>response.json())
    .then((data)=>{
        setSellers(data)});
}

    return(
        <div className='container'>
        <h2>Sellers</h2>
        <br/>
        <br/>
        <Link className='addLink' state={{sellers}} to={`/seller/add`}>Create +</Link>
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
           
            {
                sellers.map( (X) =>
                <tr>
                    <td>{X.id}</td>
                    <td>{X.firstName}</td>
                    <td>{X.surname}</td>
                    <td>{X.address}</td>
                    <td>{X.postcode}</td>
                    <td>{X.phone}</td>
                    <td><input type="button" id='deleteBtn' value="Delete"onClick={() => DeleteSeller(X)}></input>
                    <Link className='editLink' state={{sellers: X}} to={`/seller/${X.id}/edit`}>Update</Link>
                    
                    </td>
                  
                </tr>
               
  ) 
            }
            </tbody>
        </table>
        
        </div>
    )
}

export default ViewSellers;