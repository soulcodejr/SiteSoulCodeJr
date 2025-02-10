import "../assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProcessoSeletivo from "../pages/ProcessoSeletivo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ProcessoSeletivo />} path="/processo-seletivo" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
