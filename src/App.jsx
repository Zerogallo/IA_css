import "./App.css";
import logo from "../public/Devlogo.jpg";
import { FaLaptopCode } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";

function App() {
  return (
    <>
      <div className="contents">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>IAcss</h1>
        </div>
        <div className="caixaTotal">
          <div className="caixaCss">
            <div className="caixaCodigo">
              <FaLaptopCode />
              <h1>Código CSS</h1>
            </div>
            <div className="caixaResultado">
              <BsChatDots />
              <h1>Resultado</h1>
            </div>
          </div>
          <div className="caixaPesquisar">
            <input type="text" placeholder="Digite sua pesquisar" />
            <button>
              <HiMagnifyingGlass /> Criar CSS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
