import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function Details(props) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + props.id)
      .then((res) => setProduct({ ...res.data }));
  }, []);
  return (
    <div>
      <p>{product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

Details.propTypes = {
  id: PropTypes.string.isRequired, // id es una cadena y es obligatorio
};
export default Details;
