function AddSeller(){
               
                let ref = fetch("http://localhost:3000/seller", {
                    method:"POST", 
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify(seller)
                })
                console.log(ref)
                ref.then((x) => console.log("POST req done"))
                
            }
      


    return(
        <>
        First Name: <input
                type="text"
                id="fName"/>
Surname: <input
            type="text"
            id="surname"/>

<input
        type="button"
        id="btn1"
        value="Save"
        onclick="AddSeller()"/>

</>
    )


export default AddSeller;
