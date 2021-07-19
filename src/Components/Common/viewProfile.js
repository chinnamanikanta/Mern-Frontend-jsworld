import React,{useState,useEffect} from 'react';


import Loader from '../../Utils/loder'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { getUser } from '../../Redux/actions/Authactions';


const ViewProfile = ({getUser}) => {

const [name, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aboutus,setAboutus] = useState("");
  const [isLoading, setLoading] = useState(false);

useEffect(() => {
    handleSubmit();
  }, []);
  const handleSubmit = () => {
    setLoading(true);

    getUser()
      .then((response) => {
        console.log(response)
        setLoading(false);
        console.log(response);
        setfullname(response.data['name']);
        setEmail(response.data['email']);
        setPassword(response.data['password'])
        setAboutus(response.data['aboutStatus']);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };






    return (

         <div className="d-flex justify-content-center align-items-center m-4 rounded">
        <div className="bg-light col-lg-6 col-md-12 col-sm-12 col-xs-12 rounded">
            <i className="fa fa-user text-secondary" style={{fontSize: 100}}/>
            <h1>View Profile</h1>

            {isLoading ? 

            <Loader />


            
            
            
            :    (

                <div>

                <p>Name: {name}</p>
                <p>Email : {email}</p>
                <p>Store password Encrypted : {password}</p>
                <p>About Me : {aboutus}</p>

                </div>


            )
            
            
            }



            </div>
            </div>

    )

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUser,
    },
    dispatch,
  );
};
export default connect(null, mapDispatchToProps)(ViewProfile);