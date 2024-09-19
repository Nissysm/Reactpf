import React from 'react'

const HHome = (props) => {
  return (
    <div>
        <h1>Network system,Trivandrum</h1>
        <h1>Hello{props.name}</h1>
        {props.children}

    </div>
  )
}

export default HHome