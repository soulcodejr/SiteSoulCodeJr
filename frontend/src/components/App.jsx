import "../assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import ProcessoSeletivo from "../pages/ProcessoSeletivo";
import NossaEquipe from "../pages/NossaEquipe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/SiteSoulCodeJr" />
          <Route
            element={<ProcessoSeletivo />}
            path="/SiteSoulCodeJr/processo-seletivo"
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
