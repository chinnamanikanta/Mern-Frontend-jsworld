import React,{useState} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import { getLocalStorage } from '../../Utils/authorization';

export default function PrivateRoute(props) {
        const [isLoggedIn] = useState(getLocalStorage('token')!=null ? true : false);

        
    return (
       
    <Switch> 

   {isLoggedIn ?  <Route {...props}/> : <Redirect to='/signin'/> }
    </Switch>  

    )
}