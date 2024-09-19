import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sampleaxios = () => {
    var [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUsers(res.data);

        })
        // .catch(err=>console.log(err))
    })
  return (
    <div>
        <table border="1">
           <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
           </tr>
           {users.map((value,index)=>{
            return(
                <tr>
                    <td>{value.name}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                </tr>
            )
           })}
        



        </table>
    </div>
  )
}

export default Sampleaxios