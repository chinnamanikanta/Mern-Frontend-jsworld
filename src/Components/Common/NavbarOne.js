import React from 'react'
import {Link, NavLink} from 'react-router-dom';

export default function NavbarOne() {
    return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-secondary p-4">
  <div className="container-fluid">
    <NavLink className="navbar-brand " to='/'>

    <b className="text-info h1">JS  </b>  World


    </NavLink>
    <div className="ma-4">
    <Link to='/signin'>
    
      <button className="btn btn-outline-primary mx-2"><b><i className="fa fa-user"/> SignIn</b></button>
    </Link>
     <Link to='/signup'>
      <button className="btn btn-outline-success mx-4"><b><i className="fa fa-user-plus"/> SignUp</b></button>
   </Link>

    </div>
    </div>

</nav>
    )
}
