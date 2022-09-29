import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido al sitio web de la Escuela! ¡Esperamos contar con lo que está buscando!"/>}/>
          <Route path="/categoria/:categoria"  element={<ItemListContainer greeting="¡Bienvenido al sitio web de la Escuela! ¡Esperamos contar con lo que está buscando!"/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/> 
          <Route path="/cart" element={<Cart />}/> 
          <Route path="/categoria/:categoria/producto/:id" element={<ItemDetailContainer />}/> 
        </Routes>
      </BrowserRouter>
      
    </>
 
  );
}

export default App;
