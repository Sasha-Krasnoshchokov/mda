import React, { memo, useCallback, useMemo } from 'react';

import { IProduct } from '../../types/types';
import ProductCardTemplate from '../templates/ProductCardTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../store/actions/orderSlicer';
import { RootState } from '../../store/store';

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  const dispatch = useDispatch();
  const orderProducts = useSelector((state: RootState) => state.order.products);
  const activeShopCategory = useSelector((state: RootState) => state.activeShopCategory);

  const handleAddToOrder = useCallback(() => {
    dispatch(
      setProduct({
        productId: `${activeShopCategory.id}/${product.id}`,
        countOfProduct: 1,
        totalSum: product.price,
        product: product,
      })
    );
  }, [dispatch, product, activeShopCategory]);

  const isProductSelected = useMemo(
    () => orderProducts.some((item) => item.productId === `${activeShopCategory.id}/${product.id}`),
    [orderProducts, activeShopCategory, product]
  );

  return (
    <ProductCardTemplate
      product={product}
      isSelected={isProductSelected}
      addToOrder={handleAddToOrder}
    />
  );
};

export default memo(ProductCard);
