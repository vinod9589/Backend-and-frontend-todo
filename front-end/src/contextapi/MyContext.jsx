import React, { createContext, useState } from "react";
import axios from "axios";

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

  return (
    <MyData.Provider
      value={{
        postdata,
        setPostData,
        handlePostData,
        handleGetData,
        handleDeleteData,
        handleUpdateData,
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
