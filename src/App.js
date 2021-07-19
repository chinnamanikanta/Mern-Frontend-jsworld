import React, { Suspense } from 'react';
import './App.css';
import Navbar from './Components/Common/navbar';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from './Utils/loder'


import {Switch,Redirect} from 'react-router-dom'
import PublicRoute from './Components/Common/publicRoute'
import Homepage from './Components/Common/Homepage';

import {NotificationContainer} from 'react-notifications';
import PrivateRoute from './Components/Common/privateRoute';

const Dashboard = React.lazy(() => import('./Components/Dashboard/dashboard'))
const ViewProfile = React.lazy(() => import('./Components/Common/viewProfile'))
const EditProfile = React.lazy(() => import('./Components/Common/editProfile'))
const SingleBook = React.lazy(() => import('./Components/Book/book'))
const JsQuiz = React.lazy(() => import('./Components/jsQuiz/jsQuiz'))
const Updates = React.lazy(() => import('./Components/Updates/index'))
const Books =  React.lazy(()=> import('./Components/Books/books'))
const Login = React.lazy(()=> import('./Components/Login/login'))
const Registration = React.lazy(() => import('./Components/Registration/registration'))



function App() {
  




  return (

    
     <div style={{minHeight:1000}}>
         <Navbar /> 
         <Suspense fallback={<Loader/>}> 

    <Switch>
    <Redirect from='/login' to="/signin"/>
    <PublicRoute path="/" component={Homepage} exact/>
    <PublicRoute path="/signup" component={Registration} exact/>
    <PublicRoute path="/signin" component={Login} exact/>
    <PrivateRoute path="/dashboard" component={Dashboard} exact/>
    <PrivateRoute path="/books" component={Books} exact/>
    <PrivateRoute path="/updates" component={Updates} exact/>
    <PrivateRoute path="/jsquiz" component={JsQuiz} exact/>
    <PrivateRoute path="/view-profile" component={ViewProfile} exact/>
    <PrivateRoute path="/edit-profile" component={EditProfile} exact/>
    <PrivateRoute path="/books/:id" component={SingleBook} exact/>
             

    <PublicRoute path="*" exact>
      <h1 className="text-center">404 Not Found</h1>
    </PublicRoute>
    </Switch>


<NotificationContainer/>
</Suspense>
    </div>
    

  );
}

export default App;
