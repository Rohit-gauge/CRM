import React, { createContext } from "react";

// Create the context
export const CardDataContext = createContext();

// Create the provider component
export const CardDataProvider = ({ children, value }) => {
  return (
    <CardDataContext.Provider value={value}>
      {children}
    </CardDataContext.Provider>
  );
};
