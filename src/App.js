import React, { useState } from "react";
import { Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
	const addItem = item => {
		// add the given item to the cart
	};

	return (
		<ProductProvider>
			<div className="App">
				<Navigation />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</div>
		</ProductProvider>
	);
}

export default App;
