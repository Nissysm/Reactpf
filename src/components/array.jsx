import React, { useState } from 'react'

const array = () => {
    var [names,setName] =useState([
        { name: 'Nissy', age: 25 },
        { name: 'Vava', age: 24 },
        { name: 'Viswa', age: 27 }
      ]);
    
  return (
    <div>
         
    <table>

        <tr>
            <th>name</th>
            <th>Age</th>
        </tr>

        <tbody>
        {names.map((value, index) => (
          <tr key={index}>
            <td>{person.name}</td>
            <td>{person.age}</td>
          </tr>
        ))}
      </tbody>
    </table>





    </div>
  )
}

export default array










 
