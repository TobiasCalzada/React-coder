import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemCount from "./Components/ItemCount/ItemCount"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"


const App = () => {

  const onAdd= (contador)=>{
    alert(`Fueron agregados ${contador} productos al carrito`)
  }

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenido al sitio web de la Escuela! ¡Esperamos contar con lo que está buscando!"/>
      <ItemDetailContainer />
      <ItemCount stock={10} onAdd={onAdd}/>
      
    </>
 
  );
}

export default App;
