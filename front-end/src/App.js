import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import MyContext from "./contextapi/MyContext";
import EntryForm from "./pages/EntryForm";
import Login from "./pages/Login";
import CounterApp from "./pages/CounterApp";

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
        </Routes>
      </HashRouter>
    </MyContext>
  );
}

export default App;
