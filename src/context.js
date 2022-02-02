import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const getCurrentTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const INITIAL_STATE = { darkTheme: getCurrentTheme() };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkTheme: !state.darkTheme };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
