const initialization = {
  totalPrice: 0,
  items: [],
  countItem: 0,
};

function cartReducer(state = initialization, action) {
  switch (action.type) {
    case "SET_PRICE_PLUS": {
      return { ...state, totalPrice: action.payload + state.totalPrice };
    }
    case "SET_PRICE_MINUS": {
      return { ...state, totalPrice: state.totalPrice - action.payload };
    }
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (item, index, a) =>
            a.findIndex((t) => t.id === action.payloadId) !== index
        ),
      };
    default:
      return state;
  }
}

export default cartReducer;
/* ...state,
        items: state.items.filter(
          (item, index, a) =>
            a.findIndex(() => item.id === action.payloadId) !== index
        ),
        
         ...state,
        items: state.items.filter(
          (item, index, a) =>
            a.findIndex((t) => t.id === action.payloadId) !== index
        ),
        */
