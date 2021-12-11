export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_GOODS': {
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    }

    case 'ADD_ORDER_TO_BASKET': {
      const { order, goods } = state;
      const { id } = payload;
      const productFromGoods = goods.find((product) => product.id === id);
      return {
        ...state,
        order: [...order, productFromGoods],
      };
    }

    case 'REMOVE_ORDER_FROM_BASKET': {
      const { order } = state;
      const { id } = payload;

      return {
        ...state,
        order: order.filter((orderItem) => orderItem.id !== id),
      };
    }

    case 'INCRISE_QUANTITY_TO_ORDER': {
      const { order } = state;
      const { id } = payload;

      const newOrder = order.map((product) => {
        const quantity = (product.quantity || 0) + 1;
        return product.id === id ? { ...product, quantity } : product;
      });

      return {
        ...state,
        order: newOrder,
      };
    }

    case 'DECREASE_QUANTITY_TO_ORDER': {
      const { order } = state;
      const { id } = payload;

      const newOrder = order.map((product) => {
        let quantity = product.quantity || 0;
        quantity = quantity > 1 ? quantity - 1 : 1;
        return product.id === id ? { ...product, quantity } : product;
      });

      return {
        ...state,
        order: newOrder,
      };
    }

    case 'SET_BASKET_SHOW': {
      return {
        ...state,
        isBasketShow: payload.isBasketShow || false,
      };
    }

    case 'SET_ALERT_NAME': {
      return {
        ...state,
        alertName: payload.name,
      };
    }

    default:
      return state;
  }
}
