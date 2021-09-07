import { ReactElement } from "react";
import { Provider } from "react-redux";
import Nav from "./components/layouts/Nav";
import Products from "./components/Products";
import store from "./redux/store";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <Provider store={store}>
      <Nav />
      <div className="container py-5">
        <Products />
      </div>
    </Provider>
  );
}
