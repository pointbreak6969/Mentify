import Navbar from "./components/nav/Navbar";
import "./App.css"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, useParams, BrowserRouter } from "react-router-dom";
import Heros from "./components/heros/Heros";
import Library from "./pages/Library";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/library" element={<Library/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
