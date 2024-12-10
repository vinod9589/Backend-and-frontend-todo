import React, { createContext, useState } from "react";
import axios from "axios";
import { use } from "react";
import { BaseURL } from "../BaseUrl";

export const MyData = createContext();
function MyContext({ children }) {
  const [id, setId] = useState(null);
  const [list, setList] = useState([]);
  const [postdata, setPostData] = useState({
    fristname: "",
    lastname: "",
    gmail: "",
    department: "",
    salary: "",
  });

  const [postdatatodo, setPostDataTodo] = useState({
    title: "",
    discription: "",
  });
  const [listtodo, setListTodo] = useState([]);

  const handlePostData = () => {
    axios.post("http://localhost:5001/api/testing", postdata).then(() => {
      console.log("Data successfully posted");
      handleGetData();
      setPostData({
        fristname: "",
        lastname: "",
        gmail: "",
        department: "",
        salary: "",
      });
    });
  };

  const handleGetData = () => {
    axios
      .get("http://localhost:5001/api/testing")
      .then((res) => setList(res.data.data));
  };

  const handleDeleteData = (x) => {
    axios
      .delete("http://localhost:5001/api/testing/" + x)
      .then((res) => handleGetData(res.data.data));
  };
  const handleUpdateData = () => {
    axios
      .put("http://localhost:5001/api/testing/" + id, postdata)
      .then((res) => {
        handleGetData();
        setPostData();
      });
  };
  //  -------------------create todo api data -----------------------
  const handlePostDataTodo = () => {
    axios.post("http://localhost:5001/api/tasktodo", postdatatodo).then(() => {
      console.log("Data successfully posted");
      setPostDataTodo({
        title: "",
        discription: "",
      });
    });
  };

  const handleGetDataTodo = () => {
    axios
      .get("http://localhost:5001/api/tasktodo")
      .then((res) => setListTodo(res.data.data));
  };

  const handleDeleteDataTodo = (x) => {
    axios
      .delete("http://localhost:5001/api/tasktodo/" + x)
      .then((res) => handleGetDataTodo(res.data.data));
  };
  const handleUpdateDataTodo = () => {
    axios
      .put("http://localhost:5001/api/tasktodo/" + id, postdatatodo)
      .then((res) => {
        handleGetDataTodo();
        setPostDataTodo();
      });
  };

  // -----------------------SignIn---------------------------

  const [postdatasignup, setPostDataSignUp] = useState({});

  const handlePostDataSignUP = () => {
    axios.post("http://localhost:5001/api/signin", postdatasignup).then(() => {
      console.log("Data successfully posted");
      setPostDataSignUp({
        fristname: "",
        lastname: "",
        email: "",
        password: "",
      });
    });
  };

  // ------------------------Login------------------------

  const [postdatalogin, setPostDataLogin] = useState({});

  const handlePostDataLogin = () => {
    axios.post(BaseURL + "logintodo", postdatalogin).then(() => {
      console.log("Data successfully posted");
      setPostDataLogin({
        email: "",
        password: "",
      });
    });
  };

  return (
    <MyData.Provider
      value={{
        postdata,
        postdatatodo,
        listtodo,
        setPostDataTodo,
        setPostData,
        handlePostData,
        handleGetData,
        handleDeleteData,
        handleUpdateData,
        handleDeleteDataTodo,
        handleUpdateDataTodo,
        handleGetDataTodo,
        handlePostDataTodo,
        handlePostDataSignUP,
        postdatasignup,
        setPostDataSignUp,
        handlePostDataLogin,
        postdatalogin,
        setPostDataLogin,

        list,
        id,
        setId,
      }}
    >
      {children}
    </MyData.Provider>
  );
}

export default MyContext;
