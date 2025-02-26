import Duvidas from "../components/Duvidas";
import Plans from "../components/Plans";
import './Home.css'


export default function Home() {
  return (
    <div className="home">

      <Plans />

      <Duvidas />
      <Contrate/>
    </div>
  );
}
