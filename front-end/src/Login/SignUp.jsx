import React from "react";
import "./Login.css";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
function SignUp() {
  return (
    <>
      <div className="container-fluid bg-info d-flex justify-content-center  align-items-center img-fluid login-ui-main text-white  ">
        <div className="login-ui-div ">
          <div className="text-center">
            <span
              style={{
                borderEndStartRadius: "15px",
                borderEndEndRadius: "15px",
                borderStartEndRadius: "-50px",
              }}
              className="bg-info py-1 px-4 fs-3"
            >
              Register
            </span>
          </div>
          <div className="py-4 px-5">
            <div className="">
              <label className="mx-3" htmlFor="">
                FristName
              </label>
              <div className="border border-green py-2 rounded-5 ">
                <input
                  style={{ outline: "none" }}
                  className="border-0 bg-transparent  "
                  type="text"
                  name=""
                  id=""
                />
                <PersonIcon />
              </div>
            </div>
            <div className="mt-2">
              <label className="mx-3" htmlFor="">
                LastName
              </label>
              <div className="border border-green py-2 rounded-5 ">
                <input
                  style={{ outline: "none" }}
                  className="border-0 bg-transparent  "
                  type="text"
                  name=""
                  id=""
                />
                <PersonIcon />
              </div>
            </div>
            <div className="mt-2">
              <label className="mx-3" htmlFor="">
                Email
              </label>
              <div className="border border-green py-2 rounded-5 ">
                <input
                  style={{ outline: "none" }}
                  className="border-0 bg-transparent  "
                  type="text"
                  name=""
                  id=""
                />
                <MailOutlineIcon />
              </div>
            </div>
            <div className="mt-2">
              <label className="mx-3" htmlFor="">
                Password
              </label>
              <div className="border border-green py-2 rounded-5">
                <input
                  style={{ outline: "none" }}
                  className="border-0  bg-transparent"
                  type="text"
                  name=""
                  id=""
                />
                <LockOpenIcon />
              </div>
            </div>
            

            <div className="text-center bg-danger rounded-3 py-2 mt-3">
              <button className="bg-transparent border-0 text-white  ">
                Submit
              </button>
            </div>
            <div className="mt-2">Already have Account? Login</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;