import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/MuiComponents/Home";
import PrimarySearchAppBar from "./Components/MuiComponents/PrimarySearchAppBar";

function App() {
  return (
    <BrowserRouter>
    <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
