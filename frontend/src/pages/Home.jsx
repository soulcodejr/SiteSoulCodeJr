import Duvidas from "../components/Duvidas";
import Plans from "../components/Plans"
//import Contrate from "../sections/Contrate";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Plans />
      <Duvidas />

    </div>
  );
}
