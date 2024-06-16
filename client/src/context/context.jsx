import React, { createContext, useState, useEffect } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = () => {
    const fullname = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const age = localStorage.getItem("age");
    if (fullname && email && age) {
      setUser({ fullname, email, age });
    }
  };

  useEffect(() => {
    updateUser(); // Update user on initial render

    // Update user whenever a change is made to the local storage
    window.addEventListener('storage', updateUser);

    // Cleanup function
    return () => {
      window.removeEventListener('storage', updateUser);
    };
  }, []);


  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };