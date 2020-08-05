export const initialState = {
  basket: [],
  user: null
};
export const getBasketTotal = basket => {
  //console.log(basket);
  //basket?.reduce((amount,item) => item.price + amount, 0);
  let amount = 0;
  for (let item of basket) {
    amount += item.price;
  }
  return amount;
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );
      if (index >= 0) {
        //Item exists in basket
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove item with id :${action.id} as it not exist`);
      }
      return {
        ...state,
        basket: newBasket
      };
    default:
      return state;
  }
}
export default reducer;
