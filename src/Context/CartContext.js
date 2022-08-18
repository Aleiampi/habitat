import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext ();

const CartProvider = ({ children }) => {
     
    const [cartArray, setCartArray] =  useState([])
    const [totalGastado, setTotalGastado] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    

    const addToCart = (product, quantity)=> {

        if (isInCart(product.id)) {
            console.log('ya está el producto en el carrito.', product.id); // esta sería la acción para cuando ya está agregado.

            const actualizarCant = cartArray.findIndex(el => el.id === product.id)
            cartArray[actualizarCant].quantity = cartArray[actualizarCant].quantity + quantity
            const actSubtotal  = cartArray.findIndex(el => el.id === product.id)
            cartArray[actSubtotal].subtotal = cartArray[actSubtotal].subtotal+(product.price * quantity)
            setCartArray([...cartArray])
            console.log(cartArray);
            setTotalGastado(totalGastado+(product.price*quantity))
            setTotalItems(totalItems+quantity)
          } else {
            console.log(`Agregaste ${product.title}, cantidad: ${quantity}`);
            const nuevoProd ={
                // item: product,
                id : product.id,
                category: product.category,
                title: product.title,
                description: product.description,
                price: product.price,
                // description : product.details,
                // stock: product.stock,
                image: product.image,
                quantity : quantity,
                // subtotal : parseInt(product.price)  * parseInt(cantidad) 
            }
            console.log(nuevoProd);
            setCartArray([...cartArray, nuevoProd])
            setTotalGastado(totalGastado+(product.price*quantity))
            setTotalItems(totalItems+quantity)

          }

    }

    const deleteFromCart = (id)=>{
        const updatedCart = cartArray.filter(item => item.id !== id);
        // console.log(id);
        setCartArray(updatedCart);
        setTotalGastado(updatedCart.reduce((sum, el)=> sum + el.subtotal, 0))
        setTotalItems(updatedCart.reduce((sum, el)=> sum + el.cantidad, 0))
        // console.log(cartArray)
    }

    const clearCart = ()=>{
        setCartArray ([])
        setTotalGastado(0)
        setTotalItems(0)
    }

    const isInCart = (id) =>{
        return cartArray.some(element => element.id === id)
    }

    // const totalGastado = () =>{
    //     return cartArray.reduce((sumatoria, expense) => sumatoria + expense.subtotal, 0)
    
    // const precioTotal = () => {
    //     return cartArray.reduce((accum, el) => accum = accum + (el.price*el.cantidad), 0)
    // }
        
    //   }

    const value = {
        cartArray,
        addToCart,
        deleteFromCart,
        clearCart,
        // precioTotal,
        // total,
        totalGastado,
        totalItems

        
    }


    return (
        <CartContext.Provider value={value}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;