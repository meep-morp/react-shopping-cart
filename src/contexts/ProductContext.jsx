import React from "react";
import { createContext, useState } from "react";
import data from "../data";

export const ProductContext = createContext()

export const ProductProvider = props => {
    const [cart, setCart] = useState([]);
    const [products] = useState(data);

    return (
        <ProductContext.Provider
            products={products}
            cart={cart}
            setCart={setCart}>
            {props.children}
        </ProductContext.Provider>
    )
}