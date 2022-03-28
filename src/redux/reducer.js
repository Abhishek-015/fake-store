import { ADD_DATA, SORT_DATA } from "./actionTypes";

let initialState = {
    data:[]
}

const userReducer = (state = initialState, { type, payload }) => {
  console.log("payload===>",payload)
  switch (type) {
    case ADD_DATA:
      return {...state.data,data:[...payload]}
    case SORT_DATA:
      return {...state,data:[...payload]}

    default:
      return state;
  }
};

export default userReducer;
