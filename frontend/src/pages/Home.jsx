
import Duvidas from "../sections/Duvidas";
import Plans from "../sections/Plans";
import Contrate from "../sections/Contrate";
import Services from "../sections/Services";
import NossaEquipe from "../sections/NossaEquipe";
import "./Home.css";



import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Services />
      <Plans />
      <NossaEquipe />
      <Duvidas />
      <Contrate />
    </div>
  );
}
