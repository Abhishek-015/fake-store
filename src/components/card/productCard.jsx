import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const ProductCard = () => {
  const data = useSelector((state) => state.data);
  const {id} = useParams();

  const el = data.filter(el=>el.id===Number(id))
  


  return  <div>
          <div className="card m-4" style={{ width: "18rem" }} key={el.id}>
              <img
                className="card-img-top"
                src={el[0].image}
                alt="Card image cap"
              />
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
            {/* {JSON.stringify(el)} */}
    </div>
}

export default ProductCard