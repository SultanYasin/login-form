import React, { createContext, useState } from "react";

export const CreateThemeContext = createContext();

const ThemeProvider = (Props) => {

    const [stateTheme, setStateTheme] = useState('dark')

    const toggleThemeFunction = () => {
        setStateTheme(stateTheme === 'dark' ? 'light' : 'dark')
    }

  return (
    <CreateThemeContext.Provider value={{stateTheme,setStateTheme, toggleThemeFunction }} >      
      {Props.children}
    </CreateThemeContext.Provider>
  );
};

export default ThemeProvider;
