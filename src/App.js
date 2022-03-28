import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "./redux/actions";
import { ADD_DATA } from "./redux/actionTypes";
import Home from "./components/home/home";
import Products from "./components/products/products";
// import ProductCard from "./components/products/products";
import About from "./components/about/about";

import Navbar from "./components/navbar/nav";

function App() {
  const store = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
