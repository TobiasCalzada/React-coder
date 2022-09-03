import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"


const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenido al sitio web de la Escuela! ¡Esperamos contar con lo que está buscando!"/>
    </>
 
  );
}

export default App;
