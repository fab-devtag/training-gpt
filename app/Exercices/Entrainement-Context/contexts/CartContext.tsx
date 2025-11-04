"use client";
import {
  Dispatch,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: Product[];
  discount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; product: { id: number; name: string; price: number } }
  | { type: "REMOVE_ITEM"; id: number }
  | { type: "UPDATE_QUANTITY"; id: number; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "APPLY_DISCOUNT"; discount: number };

interface CartContextType {
  state: CartState;
  dispatch: Dispatch<CartAction>;
  addItem: (product: { id: number; name: string; price: number }) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  applyDiscount: (discount: number) => void;
}

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
          item.id === action.id ? { ...item, quantity: action.quantity } : item
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

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const initialState: CartState = { items: [], discount: 0 };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback(
    (product: { id: number; name: string; price: number }) => {
      const productInCart = state.items.filter(
        (item) => product.id === item.id
      );
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
    },
    [state.items]
  );

  const removeItem = useCallback(
    (id: number) => {
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
    },
    [state.items]
  );

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, [state.items]);

  const applyDiscount = useCallback((discount: number) => {
    dispatch({ type: "APPLY_DISCOUNT", discount: discount });
  }, []);

  const value = useMemo(() => {
    return { state, dispatch, addItem, removeItem, clearCart, applyDiscount };
  }, [state]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("useCartContext must be use within a Cart Provider");

  return context;
};
