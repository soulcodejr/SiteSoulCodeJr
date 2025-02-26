import Duvidas from "../sections/Duvidas";
import Contrate from '../sections/Contrate'
import './Home.css'


export default function Home() {
  return (
    <div className="home">
      <h1>HOME PAGE</h1>
      <Duvidas />
      <Contrate/>
    </div>
  );
}
