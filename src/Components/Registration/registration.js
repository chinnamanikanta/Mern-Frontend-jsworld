import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Validator } from '../../Utils/validation';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {signup} from '../../Redux/actions/Authactions'


function Registration({signup}) {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [loggedIn,setLoggedIn] = useState(false);
    const [, forceUpdate] = useState(false)

    let validator = Validator();


    const submitSignup = (e) => {
        setLoggedIn(true)
    
        e.preventDefault();

        if(validator.current.allValid()) {
            let user = {
                name:name,
                email:email,
                password:password
            }

            signup(user).then(res => {
                console.log(res)
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
            <i className="fa fa-user-plus text-secondary" style={{fontSize: 100}}/>
            <h1>Register</h1>
            <form className="m-5"  onSubmit={submitSignup}>
            <input type="text" className="form-control " placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
            {validator.current.message('Name',name,'required|name')}
            <br/>
                        <input type="email" className="form-control " placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        {validator.current.message('Email',email,'required|email')}
            <br/>
                        <input type="password" className="form-control " placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        {validator.current.message('Password',password,'required|password')}
            <br/>

            <input type="submit" value="submit" className="btn btn-primary"/>
             {loggedIn && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading"/>
                        }
        

            <br/>
            <br/>
            <span className="text-dark">Already Have An Account?</span>
            <Link to='/signin'>
            <button className="btn btn-outline-info mx-4">Login</button>
            
            </Link>
            </form>
        </div>
            
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signup
    },dispatch)
}

export default connect(null,mapDispatchToProps)(Registration)