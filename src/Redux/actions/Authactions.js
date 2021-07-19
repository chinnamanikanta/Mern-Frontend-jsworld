import {authAPI} from '../../Utils/apiVariables';
import {logout} from '../../Utils/authorization';
import { getLocalStorage } from '../../Utils/authorization';

export const signup = (body) =>(dispatch, getState, {api,Toast}) => {

    return new Promise((resolve,reject) => {
        api({...authAPI.signupUser,body}).then(response => {
            resolve(response.data)
        
            if(response.data.success) {
              
              window.location.href = '/signin'
              
                Toast({type:"success", message:response.data.message, time:3000})
                

            }
            else {
                  Toast({type:"error", message:response.data.message, time:3000})
            }


        })
        .catch(error => {
            reject(  Toast({type:"error", message:error.toString(), time:3000}))
        })
    })

}


export const signin = (body) =>(dispatch, getState, {api,Toast}) => {

    return new Promise((resolve,reject) => {
        api({...authAPI.signinUser,body}).then(response => {
        
        
            if(response.data['success']) {
                resolve(response.data)
                Toast({type:"success", message:response.data.message, time:3000})
                

            }
            else {
                reject(response.message)
        Toast({type:"warning", message:response.data.message, time:10000})
        
        window.location.href = '/signup'

    


            }


        })
        .catch(error => {
            reject(  Toast({type:"error", message:error.toString(), time:3000}))
        })
    })

}


export const getUser = () => (dispatch, getState, {api, Toast}) => {
  return new Promise((resolve, reject) => {
    let email = getLocalStorage("email");
    api({...authAPI.getUser(email)})
      .then((response) => {
    
        resolve(response.data);
      
      })
      .catch((error) => {
        
      });
  });
};


export const updateProfile = (body) => (dispatch, getState, {api, Toast}) => {
  return new Promise((resolve, reject) => {
    api({...authAPI.updateProfile, body})
      .then((response) => {
          console.log("update",response)
        resolve(response.data);
        if (response.data.success) {
          Toast({type: "success", message: response.data.message, time: 3000});
          window.location.href = '/dashboard'
        } else {
          Toast({type: "error", message: response.data.message, time: 3000});
        }
      })
      .catch((error) => {
        reject(Toast({type: "error", message: error.toString(), time: 3000}));
      });
  });
};





export const logoutUser = () =>(dispatch, getState, {api,Toast}) => {

    return new Promise((resolve,reject) => {
        api({...authAPI.logoutUser}).then(response => {
            resolve(response.data)
        
            if(response.data.success) {
                logout();
                
                Toast({type:"success", message:response.data.message, time:3000})
                

            }
            else {
                  Toast({type:"error", message:response.data.message, time:3000})
            }


        })
        .catch(error => {
            reject(  Toast({type:"error", message:error.toString(), time:3000}))
        })
    })

}