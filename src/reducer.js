export function reducer(state, { type, payload }) {
  switch (type) {
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
    default:
      return state;
  }
}
