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

  value.setGoodsNew = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  value.addOrderToBasketNew = (id) => {
    dispatch({ type: 'ADD_ORDER_TO_BASKET', payload: { idOrder: id } });
  };

  value.removeOrderFromBasket = (orderId) => {
    dispatch({ type: 'REMOVE_ORDER_FROM_BASKET', payload: { id: orderId } });
  };

  value.incriseQuantityToOrder = (id) => {
    dispatch({ type: 'INCRISE_QUANTITY_TO_ORDER', payload: { id } });
  };

  value.decreaseQuantityToOrderNew = (id) => {
    dispatch({
      type: 'DECREASE_QUANTITY_TO_ORDER',
      payload: { id },
    });
  };

  value.addToBasket = (goodsId) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: { id: goodsId } });
  };

  value.hadleBasketShow = () => {
    dispatch({ type: 'HADLE_BASKET_SHOW' });
  };

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.hasProductOrder = () => {
    dispatch({ type: 'HAS_PRODUCT_ORDER' });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
