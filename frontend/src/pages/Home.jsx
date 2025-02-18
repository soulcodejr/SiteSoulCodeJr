import Duvidas from "../components/Duvidas";
import Planos from "../components/Planos";
import './Home.css'


export default function Home() {
  return (
    <div className="home">
      <h1>HOME PAGE</h1>
      <Planos />
      <Duvidas />
      <div>

      </div>
    </div>
  );
}