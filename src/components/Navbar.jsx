import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <header>
            <Link to={''}>Home</Link>
            <Link to={'/Arrays'}>Arrays</Link>
            <Link to={'/UseEffect'}>UseEffcet</Link>
            <Link to={'/Sampleaxios'}>Sampleaxios</Link>
            <Link to={'/HHome'}>HHome</Link>
            <Link to={'/HHome'}>HHome</Link>
            <Link to={'/AArrays'}>AArrays</Link>

             



         </header>

    </div>
  )
}

export default Navbar