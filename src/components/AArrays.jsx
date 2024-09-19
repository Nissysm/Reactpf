import React, { useState } from 'react'

const AArrays = () => {
    var [names,setname] = useState([
        {name:'sithara',course:"Bcom",salary:4000},
        {name:'anupama',course:"bsc",salary:4500},
        {name:'jayesh',course:"MBA",salary:5900},
        {name:'karthik',course:"plus two",salary:9000},
        {name:'ramya',course:"BCA",salary:2200},
        

    ]);

  return (
    <div>
        <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Salary</th>
                </tr>
                {
                names.map((value,index) => {
                   return(
                        <tr>
                            <td>{value.name}</td>
                            <td>{value.course}</td>
                            <td>{value.salary}</td>
                        </tr>
                   )
                }
                        )
                
                }
          
        </table>
    </div>
  )
}

export default AArrays