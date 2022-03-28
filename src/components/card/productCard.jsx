import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const ProductCard = () => {
  const data = useSelector((state) => state.data);
  const { id } = useParams();

  const el = data.filter((el) => el.id === Number(id));

  return (
    <div className="text-center" style={{margin:"auto",textAlign:"center"}}>
      <h4 className="text-primary text-center">{el[0].title}</h4>
      <div
        className="card m-4 text-center"
        style={{ width: "18rem" }}
        key={el.id}
      >
        <img className="card-img-top" src={el[0].image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{el[0].title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Category : {el[0].category}</li>
          <li className="list-group-item">Brand : {el[0].brand}</li>
          <li className="list-group-item">
            Price : <span className="text-danger">{el[0].price}</span>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
