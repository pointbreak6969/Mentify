import "./App.css"
import Home from "./pages/Home";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Library from "./pages/Library";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AppContext } from "./context/context";
import { useContext } from "react";
import Prof from "./pages/Prof";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Posts from "./components/quotes/Posts/Posts";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/library" element={<Library/>}/>
    </Routes>
    {/* <Footer/>     */}
   </BrowserRouter>

    </>
  );
}

export default App;
