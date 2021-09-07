import { ReactElement } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import store from "./redux/store";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
}
