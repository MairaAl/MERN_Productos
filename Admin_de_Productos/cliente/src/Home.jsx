import { useEffect, useState } from "react";
import Products from "./Products";
import ProductsList from "./ProductsList";
import axios from "axios";
function Home() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);
  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };
  return (
    <div>
      <Products />
      {loaded && (
        <ProductsList
          products={products.products}
          removeFromDom={removeFromDom}
        />
      )}
    </div>
  );
}
export default Home;
