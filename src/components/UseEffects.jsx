import React, { useEffect, useState } from 'react'


const UseEffects = () => {

    var [wel,fn]=useState()

    const home=()=>{
        fn(<h4>home</h4>);
    }
    const gallary=()=>{
            fn(<h4>gallary</h4>);
    }
    const contact=()=>{
                fn(<h4>contact</h4>);

    }

    useEffect(()=>
    { contact()

           },[]);
  return (
    <div>
       
       <button onClick={home} style={{background:"red"}}>HOME</button>
       <button onClick={gallary} style={{background:"yellow"}}>GALLARY</button>
       <button onClick={contact} style={{background:"green"}}>CONTACT</button>
       <h1>Welcome to {wel}</h1>
         

       <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">BUTTON</button>
  <button class="btn btn-primary" type="button">B</button>
   </div>


    </div>

    

    
  )
}

export default UseEffects
