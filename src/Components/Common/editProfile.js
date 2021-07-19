import React,{useState,useEffect} from 'react';
import {Validator} from '../../Utils/validation'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getUser,updateProfile} from '../../Redux/actions/Authactions'
import {  saveLocalStorage } from '../../Utils/authorization';
import Loader from '../../Utils/loder'
const EditProfile = ({getUser, updateProfile}) => {


    const [fullname, setfullname] = useState("");

  const [password,setPassword] = useState('');
  const [aboutus,setAboutus] = useState('')
  const [isLoading, setLoading] = useState(false);
  let validator = Validator();

useEffect(() => {
    getUserData();
  }, []);
  const getUserData = () => {
    setLoading(true);
    getUser()
      .then((response) => {
        setLoading(false);
        console.log(response);
        setfullname(response.data[0].name);
      
        setPassword(response.data[0].password);
        setAboutus(response.data[0].aboutStatus)

      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };


const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
let user = {
    "name":fullname,
    "password":password,
    "aboutStatus" : aboutus
}
    updateProfile(user)
      .then((response) => {
        setLoading(false);
        console.log(response);
        saveLocalStorage("username", fullname);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };










    return (
    <div className="d-flex justify-content-center align-items-center text-center m-4 rounded">
      <div className="bg-light col-lg-6 col-md-12 col-sm-12 col-xs-12 rounded">
        <i className="fa fa-user text-secondary" style={{fontSize: 200}} />
        <h1>Edit Profile</h1>


        <form className="m-3" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
          {validator.current.message("Full name", fullname, "required")}
          <br />
          
           <input
            
            type="text"
            className="form-control"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>

           <input
            
            type="text"
            className="form-control"
            placeholder="About me"
            value={aboutus}
            onChange={(e) => setAboutus(e.target.value)}
          />

          <br/>
          <br/>

     {!isLoading ? <input type="submit" value="Update" className="btn btn-primary w-50" /> : <Loader />}
          <br />
          <br />




</form>




        </div></div>
        )

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUser,
      updateProfile,
    },
    dispatch,
  );
};
export default connect(null, mapDispatchToProps)(EditProfile);