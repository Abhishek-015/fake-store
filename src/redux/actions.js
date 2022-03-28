import axios from "axios";
import { ADD_DATA, SORT_DATA } from "./actionTypes";

export const fetchData = () => async (dispatch) => {
  const res = await axios.get("https://movie-fake-server.herokuapp.com/products");
  console.log(res.data)
  dispatch({
    type: ADD_DATA,
    payload: res.data,
  });
};
export const sortData = ({type,payload}) => {
    return {
        type,
        payload
    }
}

