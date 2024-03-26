import { BrowserRouter, Route } from "react-router-dom";
import Main from "./views/Main";
import Detail from "./views/Detail";
function Router() {
  return (
    <div className="Router">
      <BrowserRouter>
        <Route
          path="/products/"
          render={(routeProps) => <Main {...routeProps} />}
        />
        <Route
          path="products/:id"
          render={(routeProps) => <Detail {...routeProps} />}
        />
      </BrowserRouter>
    </div>
  );
}
export default Router;
