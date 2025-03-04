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
<<<<<<< HEAD
          <Route
            element={<ProcessoSeletivo />}
            path="/SiteSoulCodeJr/processo-seletivo"
          />
=======

          <Route element={<ProcessoSeletivo />} path="/SiteSoulCodeJr/processo-seletivo" />
          <Route element={<NossaEquipe />} path="/SiteSoulCodeJr/nossa-equipe"/>
>>>>>>> 5fb15014ca5ed93f6bc959d80ee4f18ebbfc1026
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;