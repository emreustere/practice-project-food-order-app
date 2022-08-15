import React from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
	function addItemToCartHandler(item) {}

	function removeItemCartHandler(id) {}
	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartProvider;
