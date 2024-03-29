import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Products from "./Products";

const Update = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/update/${id}`).then((res) => {
      console.log(res.data.products);
    });
  };

  return (
    <Products
      handleSubmit={handleSubmit}
      name={name}
      price={price}
      description={description}
    />
  );
};
export default Update;
