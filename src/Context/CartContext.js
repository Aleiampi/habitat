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
                id : product.id,
                category: product.category,
                title: product.title,
                description: product.description,
                price: product.price,
                image: product.image,
                quantity :  quantity,
                subtotal : parseInt(product.price)  * parseInt(quantity) 
            }
            console.log(nuevoProd);
            setCartArray([...cartArray, nuevoProd])
            setTotalGastado(totalGastado+(product.price*quantity))
            setTotalItems(totalItems+quantity)
            console.log("prod en el carrito:" + cartArray)

          }

    }

    const deleteFromCart = (id)=>{
        const updatedCart = cartArray.filter(item => item.id !== id);
        setCartArray(updatedCart);
        setTotalGastado(updatedCart.reduce((sum, el)=> sum + el.subtotal, 0))
        setTotalItems(updatedCart.reduce((sum, el)=> sum + el.quantity , 0))
    }

    const clearCart = ()=>{
        setCartArray ([])
        setTotalGastado(0)
        setTotalItems(0)
    }

    const isInCart = (id) =>{
        return cartArray.some(element => element.id === id)
    }

    const value = {
        cartArray,
        addToCart,
        deleteFromCart,
        clearCart,
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