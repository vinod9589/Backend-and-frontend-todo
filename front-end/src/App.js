import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import MyContext from "./contextapi/MyContext";
import EntryForm from "./pages/EntryForm";
import CounterApp from "./pages/CounterApp";
import Todo from "./pages/Todo";
import Login from "./Login/Login.jsx";
import SingUp from "./Login/SignUp.jsx";

function App() {
  return (
    <MyContext>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entryform" element={<EntryForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Counterapp" element={<CounterApp />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signup" element={<SingUp />} />
         
         
        </Routes>
      </HashRouter>
    </MyContext>
  );
}

export default App;
