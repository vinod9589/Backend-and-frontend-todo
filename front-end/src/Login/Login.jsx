import React from "react";
import "./Login.css"
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
function Login() {
  return (
    <>
      <div
       
        className="container-fluid bg-info d-flex justify-content-center  align-items-center img-fluid login-ui-main text-white  "
      >
        <div className="login-ui-div " >
          <div   className="text-center" >  
          
            <span style={{borderEndStartRadius:"15px",borderEndEndRadius:"15px",borderStartEndRadius:"-50px"}} className="bg-info py-1 px-4 fs-3" >Login</span>
          </div>
          <div className="py-4 px-5">
            <div className=""  >
              <label className="mx-3" htmlFor="">username</label>
              <div  className="border border-green py-3 rounded-5 ">
                <input style={{outline:"none"}} className="border-0 bg-transparent  " type="text" name="" id="" />
                <PersonIcon/>
              </div>
            </div>
            <div className="mt-3"  >
              <label className="mx-3" htmlFor="">password</label>
              <div  className="border border-green py-3 rounded-5">
                <input style={{outline:"none"}} className="border-0  bg-transparent" type="text" name="" id="" />
                <LockIcon/>
              </div>
            </div>
            <div className="d-flex justify-content-between justify-content-center mt-3" >
              <label htmlFor="">Remember me <input type="checkbox" /> </label>
              <label htmlFor="">Forgot password</label>
            </div>

            <div className="text-center bg-danger rounded-3 py-2 mt-3" >
              <button className="bg-transparent border-0 text-white  " >Login</button>
            </div>
            <div className="mt-2" >dont have on account? Register</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
