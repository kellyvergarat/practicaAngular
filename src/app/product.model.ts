export interface Product{
  name: string;
  price: number;
  image: string;
  category?: string; /* el ? lo hace opcional puede o no estar en el objeto*/
}
