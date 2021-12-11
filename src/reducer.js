function incriseQuantityToOrder(state, id) {
  const order = (prevOrder) =>
    prevOrder.map((product) => {
      const quantity = (product.quantity || 0) + 1;
      return product.id === id ? { ...product, quantity } : product;
    });

  return {
    ...state,
    order: [...order],
  };
}

function addOrderToBasket(state, id) {
  const productFromGoods = state.goods.find((product) => product.id === id);

  return {
    ...state,
    order: [...state.order, productFromGoods],
  };
}

export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload,
        loading: false,
      };

    case 'ADD_ORDER_TO_BASKET': {
      return addOrderToBasket(state, payload.id);
    }

    case 'REMOVE_ORDER_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((orderItem) => orderItem.id !== payload.id),
      };

    case 'INCRISE_QUANTITY_TO_ORDER': {
      return incriseQuantityToOrder(state, payload.id);
    }

    case 'DECREASE_QUANTITY_TO_ORDER_NEW': {
      const order = (prevOrder) =>
        prevOrder.map((product) => {
          let quantity = product.quantity || 0;
          quantity = quantity > 1 ? quantity - 1 : 1;
          return product.id === payload.id ? { ...product, quantity } : product;
        });

      return {
        ...state,
        order: [...order],
      };
    }

    case 'HAS_PRODUCT_ORDER': {
      return (
        state.order.findIndex(({ id: orderId }) => orderId === payload.id) > -1
      );
    }

    case 'ADD_TO_BASKET': {
      const hasIdsame = ({ id: orderId }) => orderId === payload.id;
      const hasProductOrder = state.order.findIndex(hasIdsame) > -1;

      if (!hasProductOrder) {
        return addOrderToBasket(state, payload.goodsId);
      }
      return incriseQuantityToOrder(state, payload.goodsId);
    }

    default:
      return state;
  }
}
