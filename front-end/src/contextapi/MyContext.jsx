import React, { createContext, useState } from "react";
import axios from "axios";
import { use } from "react";

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

  const [postdatatodo, setPostDataTodo] = useState({});
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

  const handlePostDataTodo = () => {
    axios.post("http://localhost:5001/api/todo", postdatatodo).then(() => {
      console.log("Data successfully posted");
      setPostData({
        title: "",
        discription: "",
      });
    });
  };

  const handleGetDataTodo = () => {
    axios
      .get("http://localhost:5001/api/todo")
      .then((res) => setListTodo(res.data.data));
  };

  const handleDeleteDataTodo = (x) => {
    axios
      .delete("http://localhost:5001/api/todo/" + x)
      .then((res) => handleGetDataTodo(res.data.data));
  };
  const handleUpdateDataTodo = () => {
    axios
      .put("http://localhost:5001/api/Todo/" + id, postdatatodo)
      .then((res) => {
        handleGetDataTodo();
        setPostDataTodo();
      });
  };

  return (
    <MyData.Provider
      value={{
        postdata,
        postdatatodo,
        setListTodo,
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
