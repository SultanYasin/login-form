import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CountReducer from "./Components/Hooks/CountReducer";
import Home from "./Components/MuiComponents/Home";
import PrimarySearchAppBar from "./Components/MuiComponents/PrimarySearchAppBar";
import Tour from "./Components/MuiComponents/Tour";


function App() {
  return (
<CountReducer />
  );
}

export default App;

/*
    <BrowserRouter>
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>


import Header from "./Components/Hooks/Header";
import Login from "./Components/Hooks/Login";
import ThemeProvider from "./Components/Hooks/ThemeContext";

 <ThemeProvider>
        <Header />
        <Login />
      </ThemeProvider>     
     */
