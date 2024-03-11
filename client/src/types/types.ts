export type ID = string | number;
export type NavType = 'tabs' | 'medicaments';
export type InputType = 'text' | 'tel' | 'email' | 'number';

export interface IInput {
  id: ID;
  type: InputType;
  label: string;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
}

export interface IFilter {
  id: keyof Pick<IProduct, 'price' | 'producer'>;
  label: string;
}

export interface IOption {
  id: ID;
  label: string;
}

export interface IProduct {
  id: ID;
  label: string;
  price: number;
  producer: string;
  imageUrl?: string;
}
export type SortedByKey = keyof Pick<IProduct, 'price' | 'producer'>;

export interface IOrderProduct {
  productId: ID;
  countOfProduct: number;
  totalSum: number;
  product: IProduct;
}

export interface IUserOrder {
  userName: string;
  userEmail: string;
  userPhone: string;
  userAddress: string;
}
