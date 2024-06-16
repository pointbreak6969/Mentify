import Navbar from "./components/nav/Navbar";
import "./App.css"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, useParams, BrowserRouter } from "react-router-dom";
import Heros from "./components/heros/Heros";
import Library from "./pages/Library";
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
      <Route path="/professional" element={<Prof/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
    </Routes>
    {/* <Footer/>     */}
   </BrowserRouter>

    </>
  );
}

export default App;
