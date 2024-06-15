import Navbar from "./components/nav/Navbar";
import "./App.css"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, useParams, BrowserRouter } from "react-router-dom";
import Heros from "./components/heros/Heros";
import Library from "./pages/Library";
import Prof from "./pages/Prof";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/library" element={<Library/>}/>
      <Route path="/professionals" element={<Prof/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
