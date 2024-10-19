import "./App.css";
import Boton from "./components/Boton.jsx";
import Contador from "./components/contador.jsx";
import { useState } from "react";

function App() {
  const [numDeClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numDeClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="container-logo">
        <h1>Counter With React</h1>
      </div>
      <div className="container-main">
        <Contador numeroDeClics={numDeClics} />
        <div>
        <Boton texto="+" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={true}
          manejarClic={reiniciarContador}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
