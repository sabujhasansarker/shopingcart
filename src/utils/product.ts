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
