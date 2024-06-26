export interface IinitialState {
  openSidebar: boolean;
  cartProducts: Iproducts[];
  loading: boolean;
  openFilters: boolean;
  categories: Icategory[];
}
export interface Istore {
  name: string;
  id: string;
}
export interface Ibrand {
  name: string;
  id: string;
  storeId: string;
}
export interface Icategory {
  name: string;
  billboardId: string;
  createdAt: string;
  id: string;
  storeId: string;
}
export interface Ibillboard {
  label: string;
  images: {
    url: string;
  }[];
  id: string;
  storeId: string;
  createdAt: string;
}
export interface Iproducts {
  images: {
    url: string;
  }[];
  quantity: number;
  id: string;
  name: string;
  colorId: string;
  size: string;
  categoryId: string;
  price: number;
  isFeatured: boolean;
  isArchived: boolean;
  date: string;
  description: string[];
  ratings: number;
  brandId: string;
}
