

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/MuiComponents/Home";
import PrimarySearchAppBar from "./Components/MuiComponents/PrimarySearchAppBar";
import Tour from "./Components/MuiComponents/Tour";


function App() {
  return (
    <BrowserRouter>
    <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Tour />} />
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
