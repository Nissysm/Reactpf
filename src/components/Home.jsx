import React from 'react'


const home = (props) => {
  return (
    <div>

        
        <p>React is a frondent javascript library</p> 
          <h1>Hello {props.name}</h1>
          {props.children}


        
        




    </div>
  )
}

export default home