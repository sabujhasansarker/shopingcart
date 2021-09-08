import { ReactElement } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carts from "./components/Carts";
import Nav from "./components/layouts/Nav";
import Products from "./components/Products";
import Wishlist from "./components/Wishlist";
import store from "./redux/store";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <Provider store={store}>
      <Router>
        <Toaster
          position="top-left"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
        <Nav />

        <div className="container py-5">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/carts" component={Carts} />
            <Route exact path="/wishlist" component={Wishlist} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
