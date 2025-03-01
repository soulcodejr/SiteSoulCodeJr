
import Duvidas from "../sections/Duvidas";
import Plans from "../sections/Plans";
import Contrate from "../sections/Contrate";
import "./Home.css";


import "./Home.css";
import Portfolio from "../sections/Projetos";

export default function Home() {
  return (
    <div className="home">
      <Plans />
      <Portfolio />
      <Duvidas />
      <Contrate />
    </div>
  );
}
