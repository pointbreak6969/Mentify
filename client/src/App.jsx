import "./App.css"
import Home from "./pages/Home";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Library from "./pages/Library";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/nav/Navbar";
import Prof from "./pages/Prof";
import Posts from "./components/quotes/Posts/Posts";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import Feedback from "./pages/Feedback";


function App() { 
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/library" element={<Library/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/professional" element={<Prof/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Footer/>    
   </BrowserRouter>

    </>
  );
}

export default App;
