export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload,
        loading: false,
      };

    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };

    case 'REMOVE_ORDER_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((orderItem) => orderItem.id !== payload.id),
      };

    case 'ADD_ORDER_TO_BASKET': {
      const productFromGoods = state.goods.find(
        (product) => product.id === payload.idOrder,
      );

      return {
        ...state,
        order: [...state.order, productFromGoods],
      };
    }

    default:
      return state;
  }
}
