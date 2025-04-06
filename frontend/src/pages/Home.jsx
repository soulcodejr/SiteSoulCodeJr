
import Duvidas from "../sections/Duvidas";
import Plans from "../sections/Plans";
import Contrate from "../sections/Contrate";
import Services from "../sections/Services";
import NossaEquipe from "../sections/NossaEquipe";
import "./Home.css";



import "./Home.css";
import Portfolio from "../sections/Projetos";
import Feedback from "../sections/Feedback";
import Inicio from "../sections/Inicio";

export default function Home() {
  return (
    <div className="home">
      <Inicio />
      <Services />
      <Plans />
      <NossaEquipe />
      <Portfolio />
      <Feedback />
      <Duvidas />
      <Contrate />
    </div>
  );
}
