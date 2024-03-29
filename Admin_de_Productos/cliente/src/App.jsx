import Details from "./Details";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Update from "./Update";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/products/" element={<Home />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/products/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
