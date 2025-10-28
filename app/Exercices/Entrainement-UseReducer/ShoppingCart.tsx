"use client";
import { useReducer } from "react";

type CartState = {
  items: { id: number; name: string; price: number; quantity: number }[];
  discount: number;
};

type CartAction =
  | { type: "ADD_ITEM"; product: { id: number; name: string; price: number } }
  | { type: "REMOVE_ITEM"; id: number }
  | { type: "UPDATE_QUANTITY"; id: number; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "APPLY_DISCOUNT"; discount: number };

export const ShoppingCart = () => {
  const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          items: [...state.items, { ...action.product, quantity: 1 }],
        };
      case "UPDATE_QUANTITY":
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.id
              ? { ...item, quantity: action.quantity }
              : item
          ),
        };
      case "REMOVE_ITEM":
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.id),
        };
      case "CLEAR_CART":
        return { ...state, items: [] };
      case "APPLY_DISCOUNT":
        return { ...state, discount: action.discount };
      default:
        return state;
    }
  };

  const initialState: CartState = { items: [], discount: 0 };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const finalTotal = total * (1 - state.discount / 100);

  const handleAddProduct = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    const productInCart = state.items.filter((item) => product.id === item.id);
    if (productInCart.length > 0) {
      const updateQuantity = productInCart[0].quantity + 1;
      dispatch({
        type: "UPDATE_QUANTITY",
        id: product.id,
        quantity: updateQuantity,
      });
    } else {
      dispatch({ type: "ADD_ITEM", product: product });
    }
  };

  const handleRemoveProduct = (id: number) => {
    const productInCart = state.items.filter((item) => item.id === id);
    console.log(productInCart);
    if (productInCart[0].quantity > 1) {
      const updateQuantity = productInCart[0].quantity - 1;
      dispatch({
        type: "UPDATE_QUANTITY",
        id: id,
        quantity: updateQuantity,
      });
    } else {
      console.log("remove");
      dispatch({ type: "REMOVE_ITEM", id: id });
    }
  };

  return (
    <div className="space-x-2">
      <p>{total}</p>
      <p>{finalTotal}</p>
      <button
        onClick={() => handleAddProduct({ id: 1, name: "Figurine", price: 50 })}
      >
        Ajout de produit
      </button>
      <button onClick={() => handleRemoveProduct(1)}>
        Supprimer un produit
      </button>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Vider le panier
      </button>
      <button
        onClick={() => dispatch({ type: "APPLY_DISCOUNT", discount: 20 })}
      >
        Appliquer une réduction
      </button>
      <div>
        {state.items.map((item) => (
          <div key={item.id} className="space-x-2">
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
