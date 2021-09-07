const setLocalStorage = (key: string, value: Array<Product>) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem(key, JSON.stringify([]));
    return [];
  }
};

export const updateCart = (state: [Product], item: Product, type: String) => {
  const exitsCarts: Product | undefined =
    state && state.find((product) => Number(product.id) === Number(item.id));
  let result = {};

  if (state) {
    if (exitsCarts) {
      exitsCarts.qty = type === "+" ? +exitsCarts.qty + 1 : -exitsCarts.qty - 1;
      exitsCarts.totalPrice = Number(exitsCarts.qty) * Number(exitsCarts.price);
      setLocalStorage("ecommerce", state);
      result = [...state];
    } else {
      item.qty = 1;
      item.totalPrice = Number(item.price);
      setLocalStorage("ecommerce", [...state, item]);
      result = [...state, item];
    }
  }
  return result;
};

export const updateWishlist = (state: [Product], item: Product) => {
  const exitsCarts: Product | undefined =
    state && state.find((product) => Number(product.id) === Number(item.id));
  let result = [];
  if (exitsCarts) {
    result = state.filter((state) => state.id !== item.id);
    setLocalStorage("ecomerce-wishlist", result);
  } else {
    result = [...state, item];
    setLocalStorage("ecomerce-wishlist", result);
  }
  return result;
};
