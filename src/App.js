import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-mono relative">
      <Navbar />
      <Routes>
        <Route path="/esusuapp" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
