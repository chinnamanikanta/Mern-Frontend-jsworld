import React,{useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Validator } from '../../Utils/validation';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {signin} from '../../Redux/actions/Authactions'
import {saveLocalStorage,getLocalStorage} from '../../Utils/authorization';
import {Toast} from '../../Utils/toast';


function Login({signin}) {
    
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [isLoggedIn,setIsLoggedin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const [, forceUpdate] = useState(false);

    const token = getLocalStorage('token') 

   useEffect(() => {
          if(token == null) {
        Toast({type:"warning", message: "Please Login", time:1000})


    }


   },[token]) 
 
    let validator = Validator();


    const submitSignin = (e) => {
        setLoggedIn(true)
    
        e.preventDefault();

        if(validator.current.allValid()) {
            let user = {

                email:email,
                password:password
            }

            signin(user).then(res => {
                
                if(res.success) {
        
                saveLocalStorage("email",email);
                saveLocalStorage("token",res.token);
                setIsLoggedin(true)
                }


            }).catch(err => {
                console.log(err)
            })
        }
        else {

            validator.current.showMessages();
            forceUpdate(true)

        }


    }



    return (
        <div className="d-flex justify-content-center align-items-center text-center m-4 rounded">
        <div className="bg-light col-lg-6 col-md-12 col-sm-12 col-xs-12 rounded">
            <i className="fa fa-user text-secondary" style={{fontSize: 100}}/>
            <h1>Login</h1>
            <form className="m-5"  onSubmit={submitSignin}>
           
                        <input type="email" className="form-control " placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        {validator.current.message('Email',email,'required|email')}
            <br/>
                        <input type="password" className="form-control " placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        {validator.current.message('Password',password,'required|password')}
            <br/>

            <input type="submit" value="login" className="btn btn-primary w-50"/>
             {loggedIn && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading"/>
                        }
            <br/>
            <br/>
 
             <input type="submit" value="forget Password" className="btn btn-outline-danger w-50"/>
              
             <br/>
            <br/>
            <span className="text-dark">Don't Have An Account?</span>
            <Link to='/signup'>
            <button className="btn btn-outline-info mx-4">SignUp</button>
            </Link>
            </form>
        </div>
           {isLoggedIn && <Redirect to ="/dashboard" />} 
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signin
    },dispatch)
}

export default connect(null,mapDispatchToProps)(Login)