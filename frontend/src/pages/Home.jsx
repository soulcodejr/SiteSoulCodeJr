
import Duvidas from "../sections/Duvidas";
import Plans from "../sections/Plans";
import Contrate from "../sections/Contrate";
import "./Home.css";


import "./Home.css";
import Portfolio from "../sections/Projetos";
import Feedback from "../sections/Feedback";

export default function Home() {
  return (
    <div className="home">
      <Plans />
      <Portfolio />
      <Feedback />
      <Duvidas />
      <Contrate />
    </div>
  );
}
