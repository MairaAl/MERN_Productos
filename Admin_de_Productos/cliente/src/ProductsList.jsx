import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductsList(props) {
  const { removeFromDom } = props;
  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/delete/" + productId)
      .then((res) => {
        removeFromDom(productId);
        console.log(res);
      });
  };
  return (
    <div>
      {props.products.map((product, index) => {
        return (
          <p key={index}>
            <Link to={`/products/${product._id}`}>{product.name}</Link>
            <button
              onClick={(e) => {
                console.log(e);
                deleteProduct(product._id);
              }}
            >
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  removeFromDom: PropTypes.func.isRequired,
};
