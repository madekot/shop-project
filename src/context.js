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

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.removeOrderFromBasket = (orderId) => {
    dispatch({ type: 'REMOVE_ORDER_FROM_BASKET', payload: { id: orderId } });
  };

  value.setGoodsNew = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  value.addOrderToBasketNew = (id) => {
    dispatch({ type: 'ADD_ORDER_TO_BASKET', payload: { idOrder: id } });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// export default ShopContext;
