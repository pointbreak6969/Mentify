import React, { createContext, useState, useEffect } from "react";
import getCookie from "../utils/getCookie";


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const accessToken = getCookie("accessToken") || null;
  const refreshToken = getCookie("refreshToken") || null;
  console.log(accessToken, refreshToken);


  

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };