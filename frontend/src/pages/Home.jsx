
import Duvidas from "../sections/Duvidas";
import Plans from "../sections/Plans";
import Contrate from "../sections/Contrate";
import Services from "../sections/Services";
import "./Home.css";


import "./Home.css";
import Portfolio from "../sections/Projetos";
import Feedback from "../sections/Feedback";

export default function Home() {
  return (
    <div className="home">
      <Services />
      <Plans />
      <Portfolio />
      <Feedback />
      <Duvidas />
      <Contrate />
    </div>
  );
}
