import "./App.css"
import Home from "./pages/Home";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Library from "./pages/Library";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AppContext } from "./context/context";
import { useContext } from "react";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/library" element={<Library/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
