// import logo from "./logo.svg";
import "./App.css";
// import { Title } from "./components/title";
// import { Button } from "./components/button";

import { Button, Title } from "./components";

function App() {

  function alerta() {
    alert("Mi primera aplicación en React.");
  }

  const buttonTitle="Mi primer button";

  return (
    <div className="App">
      <Title value="Bienvenido a mi aplicacion...!" />
      {/* <Button value="Mi primer button" onClicked="Hello Luis Angello" /> */}
      <Button value={buttonTitle} onClicked={alerta} />
    </div>
  );
}

export default App;
