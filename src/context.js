import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();
const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  value.addOrderToBasket = (id) => {
    dispatch({ type: 'ADD_ORDER_TO_BASKET', payload: { id } });
  };

  value.removeOrderFromBasket = (id) => {
    dispatch({ type: 'REMOVE_ORDER_FROM_BASKET', payload: { id } });
  };

  value.incriseQuantityToOrder = (id) => {
    dispatch({ type: 'INCRISE_QUANTITY_TO_ORDER', payload: { id } });
  };

  value.decreaseQuantityToOrder = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY_TO_ORDER', payload: { id } });
  };

  value.setBasketShow = (isBasketShow) => {
    dispatch({ type: 'SET_BASKET_SHOW', payload: { isBasketShow } });
  };

  value.setAlertName = (name) => {
    dispatch({ type: 'SET_ALERT_NAME', payload: { name } });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
