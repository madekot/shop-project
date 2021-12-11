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

  // value.setGoods = () => {};

  // value.addOrderToBasket = () => {};

  // value.removeOrderFromBasket = () => {};

  // value.incriseQuantityToOrder = () => {};

  // value.decreaseQuantityToOrder = () => {};

  // value.addToBasket = () => {};

  // value.hadleBasketShow = () => {};

  // value.closeAlert = () => {};

  // value.hasProductOrder = () => {};

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
