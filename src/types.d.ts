type Product = {
  id: Number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  qty: Number;
  totalPrice: Number;
};

type PaymentDeatiles = {
  paymentId?: string | undefined;
  name?: String;
  phone?: String;
  email?: String;
};
