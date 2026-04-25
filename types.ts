
export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: string;
  description: string;
  images: string[];
  tag: 'New Arrival' | 'Bestseller' | 'Exclusive' | 'Limited' | '';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: string[];
}

export interface DashboardStats {
  totalProducts: number;
  totalCategories: number;
  newArrivals: number;
}
