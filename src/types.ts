export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  details: {
    material: string;
    purity: string;
    weight: string;
    stones: string;
  };
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}
