import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sortData } from "../../redux/actions";
import { SORT_DATA } from "../../redux/actionTypes";

const Products = () => {
  const data = useSelector((state) => state.data);
  const [val,setVal] = useState("sort by price")
 
  const dispatch = useDispatch();

  const handleChange = (e) => {
    // e.preventDefault();
    setVal(e.target.value)
    console.log(e.target.value);
    if ((e.target.value = "Sort by asc")) {
      const sortAsc = [...data].sort((a, b) => a.price - b.price);
      console.log("sortAsc===>", sortAsc);
      dispatch(
        sortData({
          type: SORT_DATA,
          payload: sortAsc,
        })
      );
    } else {
      const sortAsc = [...data].sort((a, b) => b.price - a.price);
      console.log("==>", sortAsc);
      dispatch(
        sortData({
          type: SORT_DATA,
          payload: sortAsc,
        })
      );
    }
  };
  return (
    <div className="container-fluid m-4">
      <div className="container">
        <h2 className="text-primary">Our Products</h2>
        <div>
          <select
          onChange={handleChange}
          >
           
            <option selected>Sort by Price</option>
            <option value="Sort by asc">Sort by asc</option>
            <option value="sort by des">sort by des</option>
          </select>
        </div>
        <div className="row">
          {/* <div className="md-col-4"> */}
          {data.map((el) => (
            <div className="card m-4" style={{ width: "18rem" }} key={el.id}>
              <img
                className="card-img-top"
                src={el.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{el.title}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Category : {el.category}</li>
                <li className="list-group-item">Brand : {el.brand}</li>
                <li className="list-group-item">
                  Price : <span className="text-danger">{el.price}</span>{" "}
                </li>
              </ul>
              <div className="card-body">
                <Link to={`/product/${el.id}`} >
                  View Product
                </Link>
              </div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
