import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CustomProvider from "./Components/CartContext/CartContext";
import { User } from "./Components/User/User";
import { exportArrayJuegos } from "./firebase/firebase";

//funcion para exportar produtos a fire
//<button onClick={exportArrayJuegos}></button>

const App = () => {

  return (
    <>
      <BrowserRouter>
        <CustomProvider> 
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Rex Games! ¡La tienda de juegos mas grande de Argentina!"/>}/>
            <Route path="/categoria/:categoria"  element={<ItemListContainer greeting="¡Bienvenido a Rex Games! ¡La tienda de juegos mas grande de Argentina!"/>}/>
            <Route path="/producto/:id" element={<ItemDetailContainer />}/> 
            <Route path="/cart" element={<Cart />}/> 
            <Route path="/checkout" element={<User />}/> 
            <Route path="/categoria/:categoria/producto/:id" element={<ItemDetailContainer />}/> 
          </Routes>
        </CustomProvider>
      </BrowserRouter>
      
    </>
  );
}

export default App;
