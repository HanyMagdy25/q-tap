import React, { createContext, useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";

//initial state
const initialState = {
  //   favourite: localStorage.getItem("favourite")
  //     ? JSON.parse(localStorage.getItem("favourite"))
  //     : [],
  cart: localStorage.getItem("q-tap-cart")
    ? JSON.parse(localStorage.getItem("q-tap-cart"))
    : [],
};

// create Context
export const GlobalContext = createContext(initialState);

// provider components

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    // localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    // localStorage.setItem("watched", JSON.stringify(state.watched));
    // localStorage.setItem("favourite", JSON.stringify(state.favourite));
    localStorage.setItem("q-tap-cart", JSON.stringify(state.cart));
  }, [state]);

  //***** actions ******
  //   const addProductToFavourite = (product) => {
  //     dispatch({ type: "ADD_PRODUCT_TO_FAVOURITE", payload: product });
  //   };

  //   const removeProductFromFavourite = (id) => {
  //     dispatch({ type: "REMOVE_PRODUCT_FROM_FAVOURITE", payload: id });
  //   };

  const addProductToCart = (product) => {
    dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product });
  };
  const changeProductQty = (product, q) => {
    dispatch({
      type: "CHANGE_PRODUCT_QTY",
      payload: { id: product.id, qty: q },
    });
  };

  const removeProductFromCart = (id) => {
    dispatch({ type: "REMOVE_PRODUCT_FROM_CART", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        // watchlist: state.watchlist,
        // watched: state.watched,
        // favourite: state.favourite,
        cart: state.cart,
        // addProductToFavourite ,
        changeProductQty,
        // removeProductFromFavourite,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
