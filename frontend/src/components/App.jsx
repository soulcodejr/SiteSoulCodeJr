import "../assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProcessoSeletivo from "../pages/ProcessoSeletivo";
import NossaEquipe from "../pages/NossaEquipe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/SiteSoulCodeJr" />
          <Route element={<ProcessoSeletivo />} path="/SiteSoulCodeJr/processo-seletivo" />
          <Route element={<NossaEquipe />} path="/SiteSoulCodeJr/nossa-equipe"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
