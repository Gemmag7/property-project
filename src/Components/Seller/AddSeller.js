import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function AddSeller(){

    let navigate = useNavigate();
    const [seller, setSeller] = useState({
        "id": "",
        "firstName": "",
        "surname":"",
        "address": "",
        "postcode": "",
        "phone": ""
      })

      const handleSubmit =(e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/seller`, {
       
        method:"POST", 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(seller),
      
    }).then(res => res.json())
        .then(res => {
        setSeller({...seller, 
            id: seller.id,
            firstName: document.getElementById("firstName").value, 
            surname: document.getElementById("surname").value,
            address: document.getElementById("address").value,
            postcode:document.getElementById("postcode").value,
            phone: document.getElementById("phoneNo").value,
        })
        navigate('/seller')
        console.log(":",seller)
    });
    
}


    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <form onSubmit={handleSubmit} >
                    <div>
                        
                        First Name:<input
                                        type="text"
                                        id="firstName"
                                        value={seller.firstName}
                                        name="name"
                                        onChange={e => setSeller({...seller, firstName:e.target.value})}
                                        className="form-control"
                                        placeholder="Enter First Name..."
                                        />
                        
                    </div>
                    <div>
                    Surname:<input
                                        type="text"
                                        id="surname"
                                        value={seller.surname}
                                        name="surname"
                                        className="form-control"
                                        onChange={e => setSeller({...seller, surname:e.target.value})}
                                        placeholder="Enter Surame..."
                                        />
                    </div>
                    <div>
                    Address:<input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={seller.address}
                                        className="form-control"
                                        onChange={e => setSeller({...seller, address:e.target.value})}
                                        placeholder="Enter Address..."
                                        />
                    </div>
                    <div>
                    Postcode:<input
                                        type="text"
                                        id="postcode"
                                        name="postcode"
                                        value={seller.postcode}
                                        className="form-control"
                                        onChange={e => setSeller({...seller, postcode:e.target.value})}
                                        placeholder="Enter Postcode..."
                                        />
                    </div>
                    <div>
                    Phone Numer:<input
                                        type="text"
                                        id="phoneNo"
                                        name="phoneNo"
                                        value={seller.phone}
                                        className="form-control"
                                        onChange={e => setSeller({...seller, phone:e.target.value})}
                                        placeholder="Enter Phone Number..."
                                        />
                    </div>
                    <br/>
                    <br/>
                    <button id="mainBtn"  className="btn btn-info" >Add</button>
                </form>
                </div> 

        </div>


    )
}  

export default AddSeller;
