export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

export interface CartItem extends Product {
  quantity: number;
}
