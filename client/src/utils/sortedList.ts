import { IProduct, SortedByKey } from '../types/types';

export const sortList = (list: IProduct[], key: SortedByKey, isDescending: boolean) => {
  switch (key) {
    // sorted by type of value is number
    case 'price':
      return [...list].sort((a, b) => (isDescending ? b.price - a.price : a.price - b.price));
    // sorted by type of value is string
    default:
      return [...list].sort((a, b) =>
        isDescending ? b.producer.localeCompare(a.producer) : a.producer.localeCompare(b.producer)
      );
  }
};
