import { useState } from "react";
import axios from "axios";
export default function PersonForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/persons/new", {
        name,
        age,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={submitHandler}>
      <p>
        <label>First Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </p>
      <p>
        <label>Age</label>
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
      </p>
      <input type="submit" />
    </form>
  );
}
