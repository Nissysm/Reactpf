import React, { useState } from 'react'

export const Usestate = () => {
    // var[fname,setFname]=useState("Tiya");
    // const changeName=()=>{
    //     setFname("Fathima");
     var[value,setvalue]=useState(0);

     const plus=()=>{
        setvalue(value+1);
        
     }

     const minus=()=>{
        setvalue(value-1);
        
     }
    
  return (
    <div>
         <p>number{value}</p>
         <button onClick={plus}>plus</button>
         <button onClick={minus}>minus</button>

        




    </div>
  )
}

export default Usestate
