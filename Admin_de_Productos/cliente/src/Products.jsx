import "./App.css";
import { useState } from "react";
import axios from "axios";

function Products() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products/new", {
        name,
        price,
        description,
      })
      .then((res) => console.log(res));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Price:</label>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input type="submit" />
    </form>
  );
}

export default Products;
