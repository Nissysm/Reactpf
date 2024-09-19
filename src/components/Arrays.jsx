import React, { useState } from 'react'

const Arrays = () => {

    var [names,setName] = useState([
        { name: 'Nissy', age: 25 },
        { name: 'Vava', age: 24 },
        { name: 'Viswa', age: 27 }
      ]);
  return (
    <div>    
        <table border="1">

            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
     
                {
                names.map((value, index) => {
                    return(
                
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                </tr>

                           ) 
                                            }
                        )
                }
  
        </table>
    </div>
  )
}

export default Arrays





