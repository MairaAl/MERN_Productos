import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    console.log({ id });
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct({ ...res.data });
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <div>Title: {product}</div>
      <div>
        <p>Name: </p>
        <p>Price: </p>
        <p>Description: </p>
      </div>
    </div>
  );
}

export default Details;
