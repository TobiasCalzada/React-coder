import {createContext,useState} from "react"

export const Context =createContext();

const CustomProvider=({children})=>{  //recibo a los hijos con desestructuracion
    const [cart,setCart]=useState([])   // creo un estado para ir actualizando el carrito
    console.log(cart)
    const addItem= (item,cantidad)=>{
        if (!isInCart(item.id)){
            const itemNuevo={...item, cantidad:cantidad}
            setCart([...cart,itemNuevo])
        }else{
            setCart(
                cart.map(prod=>{
                    if (prod.id===item.id){
                        return {...prod,cantidad:prod.cantidad+cantidad}
                    }else{
                        return prod
                    }
                })
            )
        }  // agregar o sumar la cantidad nueva  
    }
    const removeItem= (id)=>{
        setCart(
            cart.filter((item)=>{
                return item.id!==id
            }) // crea un nuevo array con todos los productos cuyos ID sean distintos al recibido por parametro
        )
    }
    const clear= ()=>{
        setCart([])
    }
    
    const isInCart= (id)=> {
        const busqueda=cart.find((elemento)=>elemento.id===id)
        if (busqueda) {return true } else {return false}
    }


    return(
        <Context.Provider value={{cart,addItem,removeItem,clear}}>
            {children}
        </Context.Provider>

    )


}


export default CustomProvider 