import axios from "axios";

export const getData = async () =>
  await axios.get(`${process.env.REACT_APP_API}`);
