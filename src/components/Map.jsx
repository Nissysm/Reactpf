import React, { useState } from 'react'

const Map = () => {

var [names,SetName]=useState(["a","b","c","d","e"]);

  return (
    <div>
      <ul>
        {

              names.map((value,index) =>{

                return(<li>{value}</li>)
              })
              
            }
                
      
      </ul>
           
            



    </div>
  )
}

export default Map