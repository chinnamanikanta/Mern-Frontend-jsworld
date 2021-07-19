import React,{useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { getLocalStorage, saveLocalStorage } from '../../Utils/authorization';
import {logoutUser, getUser} from '../../Redux/actions/Authactions'


 function Navbar({logoutUser,getUser}) {
  const [loggedIn,] = useState(getLocalStorage('token')!= null ? true : false)
   const [username, setUsername] = useState(getLocalStorage("username") != null ? true : false);
  const name = getLocalStorage("username");
const logout = () => {
  logoutUser()

}
console.log("username",username, typeof(username))

const getUserData = () => {
  if (loggedIn) {
      getUser()
        .then((response) => {
          if (response.success) {


            saveLocalStorage("username",response.data['name']);
            setUsername(response.data['name']);
            
              
            
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

}

useEffect(() => {
  
getUserData()
     
  }, []);




  return (

  <nav className="navbar navbar-expand-lg navbar-dark bg-secondary p-4">
  <div className="container-fluid">
    <NavLink className="navbar-brand " to='/'>

    <b className="text-info h1">JS  </b>  World


    </NavLink>


      <form className="d-flex mx-5">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-link mx-2 h5">
          <NavLink className="nav-link active" to='/'>Home</NavLink>
        </li>
        <li className="nav-link mx-2 h5" >
          <NavLink className="nav-link"  activeClassName="btn btn-primary" to='/books'>Books</NavLink>
        </li>
          <li className="nav-link mx-2 h5">
          <NavLink className="nav-link" activeClassName="btn btn-primary"  to='/jsquiz'>Js-Quiz</NavLink>
        </li>
      <li className="nav-link mx-2 h5">
          <NavLink className="nav-link"  activeClassName="btn btn-primary"  to='/updates'>Latest Updates</NavLink>
        </li>
        <li className="nav-link dropdown mx-2 h5">
          <a className="nav-link dropdown-toggle"  href='/#' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
          <ul className="dropdown-menu mx-2"   aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item"  activeClassName="bg-white text-black" to='/view-profile'>View Profile</NavLink></li>
            <li><NavLink className="dropdown-item" activeClassName="bg-white text-black" to='/edit-profile'>Edit Profile</NavLink></li>
           
            <li onClick={() => logout()}><NavLink className="dropdown-item"  activeClassName="bg-white text-black" to='/#'>Logout</NavLink></li>
          </ul>
        </li>
        <li className="nav-link h6 w-10 text-white text-wrap my-2">
        {username ?  <span>{name.substring(0, 6)}</span>: ""}
</li>
      </ul>


      {/* {!loggedIn ?  <div className="ma-4">
    <Link to='/signin'>
    
      <button className="btn btn-outline-primary mx-2"><b><i className="fa fa-user"/> SignIn</b></button>
    </Link>
     <Link to='/signup'>
      <button className="btn btn-outline-success mx-2"><b><i className="fa fa-user-plus"/> SignUp</b></button>
   </Link>

    </div> : <p>Manikanta</p>}
     */}
    </div>


      
    {/* <div className="ma-4">
    <Link to='/signin'>
    
      <button className="btn btn-outline-primary mx-2"><b><i className="fa fa-user"/> SignIn</b></button>
    </Link>
     <Link to='/signup'>
      <button className="btn btn-outline-success mx-4"><b><i className="fa fa-user-plus"/> SignUp</b></button>
   </Link>

    </div>
     */}


  </div>
  
</nav>

    )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
    getUser,
      logoutUser,
    },
    dispatch,
  );
};
export default connect(null, mapDispatchToProps)(Navbar);
