import Navbar from "./components/nav/Navbar";
import "./App.css"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Heros from "./components/heros/Heros";
function App() {
  return (
    <>
    <Navbar/>
<Home/>
    </>
  );
}

export default App;
