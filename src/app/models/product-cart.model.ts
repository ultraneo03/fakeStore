/* Defining the shape of the data that will be returned from the API. */
export interface ProductCart {
  id: number;
  name: string;
  description: string;
  category: string;
  rating: number;
  price: number;
  qty: number;
  total: number;
  image: string;
  origin: string;
}
