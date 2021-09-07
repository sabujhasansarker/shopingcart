import { ReactElement } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Nav from "./components/layouts/Nav";
import Products from "./components/Products";
import store from "./redux/store";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <Provider store={store}>
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
        <Products />
      </div>
    </Provider>
  );
}
