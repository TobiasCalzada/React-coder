import {createContext,useState} from "react"

export const Context =createContext();

const CustomProvider=({children})=>{  //recibo a los hijos con desestructuracion
    const [cart,setCart]=useState([])   // creo un estado para ir actualizando el carrito
    const [precioTotal,setprecioTotal]=useState(0)
    const [cantElem,setCantElem]=useState(0) 
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
        setprecioTotal(precioTotal + item.precio*cantidad) 
        setCantElem(cantElem+cantidad)
    
    }
    const removeItem= (id)=>{
        /*const valor=0;
        const cant=0;
        cart.map(prod=>{
            if (prod.id===id){
                valor=prod.precio*prod.cantidad;
                cant=cantElem-prod.cantidad
            }
        })
        setprecioTotal(precioTotal-valor)
        setCantElem(cant)             no me anda */
        setCart(
            cart.filter((item)=>{
                return item.id!==id
            }) // crea un nuevo array con todos los productos cuyos ID sean distintos al recibido por parametro
        )
      
        
    }
    const clear= ()=>{
        setCart([])
        setprecioTotal(0)
        setCantElem(0) 
    }
    
    const isInCart= (id)=> {
        const busqueda=cart.find((elemento)=>elemento.id===id)
        if (busqueda) {return true } else {return false}
    }


    return(
        <Context.Provider value={{cart,precioTotal,cantElem,addItem,removeItem,clear}}>
            {children}
        </Context.Provider>

    )


}


export default CustomProvider 