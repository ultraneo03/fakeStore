/* Defining the shape of the data that will be returned from the API. */
export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  rating: number;
  price: number;
  stock: number;
  image: string;
  images: string[];
  origin: string;
}
