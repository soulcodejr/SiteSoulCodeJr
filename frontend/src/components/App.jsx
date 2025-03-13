import "../assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import ProcessoSeletivo from "../pages/ProcessoSeletivo";
import NotFound from "../pages/NotFound";

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
          <Route
            element={<NotFound />}
            path="/SiteSoulCodeJr/not-found"
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;