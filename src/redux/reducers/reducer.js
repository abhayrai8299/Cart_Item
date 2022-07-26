const initialState = {
    carts: [
    ],
    orderHistory:[

    ],

  };
  
  export const cartreducer = (state = initialState, action) => {
    switch (action.type) {

      case "Default_ADD_TO_CART":
        const check=state.carts.find((data)=>data.id===action.payload.id?true:false);
        return {
          ...state,
          carts:check?state.carts.map((data)=>data.id===action.payload.id?{...data}:data):[...state.carts,{...action.payload,qnty:action.payload.qnty}]
        }
      case "ADD_TO_CART":
        const checkState=state.carts.find((data)=>data.id===action.payload.id?true:false);
        return {
          ...state,
          carts:checkState?state.carts.map((data)=>data.id===action.payload.id?{...data,qnty:data.qnty+1}:data):[...state.carts,{...action.payload,qnty:action.payload.qnty}]
        }
      case "REMOVE_FROM_CART":
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      case "ADJUST_QNTY_ITEM":
        const checkStates=state.carts.find((data)=>data.id===action.payload.id?true:false);
        return {
          ...state,
          carts:checkStates?state.carts.map((data)=>data.id===action.payload.id?{...data,qnty:data.qnty-1}:data):[...state.carts,{...action.payload,qnty:action.payload.qnty}]
        }
      case "ADD_TO_ORDER":
         return {
          ...state,
          orderHistory:[...state.orderHistory,{...action.payload,orderID:Math.floor(Math.random() * 899999999 + 10000000),orderDate:(new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " "),TotalAmount:action.price}]
         }
      default:
        return state;
    }
  };
  