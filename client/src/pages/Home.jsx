import React from "react"
import Navbar from "../components/nav/Navbar";
import Heros from "../components/heros/Heros";
import Quotes from "../components/quotes/Quotes";
import Stories from "../components/quotes/Stories";



const Home = () => {
  return (
    <div>
    <Heros/>
    <div className="quotes" style={{backgroundColor:"#D0ECF5", display:"flex",gap:"70px",
      flexDirection:"column"
    }}>
    <Quotes/>
    <Stories/>
    </div>
    </div>
  );
};

export default Home;
