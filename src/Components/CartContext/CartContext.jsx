import {createContext,useState} from "react"

export const Context =createContext();

const CustomProvider=({children})=>{  
    const [cart,setCart]=useState([])
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
        setCart(
            cart.filter((item)=>{
                if (item.id===id){
                    setprecioTotal(precioTotal-(item.cantidad*item.precio));
                    setCantElem(cantElem-item.cantidad);
                }
                return item.id!==id
            }) 
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