export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload,
        loading: false,
      };

    // case 'ADD_ORDER_TO_BASKET': {
    // }

    // case 'REMOVE_ORDER_FROM_BASKET': {
    // }

    // case 'INCRISE_QUANTITY_TO_ORDER': {
    // }

    // case 'DECREASE_QUANTITY_TO_ORDER_NEW': {
    // }

    // case 'HAS_PRODUCT_ORDER': {
    // }

    // case 'ADD_TO_BASKET': {
    // }

    default:
      return state;
  }
}
