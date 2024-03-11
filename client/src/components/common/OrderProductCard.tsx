import React, { memo, useCallback } from 'react';

import { ID, IOrderProduct } from '../../types/types';
import { OrderProductCardTemplate } from '../templates/ProductCardTemplate';
import { useDispatch } from 'react-redux';
import { removeProduct, setOrderProductCount } from '../../store/actions/orderSlicer';

interface IProps {
  orderProduct: IOrderProduct;
  isOrderSubmitted?: boolean;
}

const OrderProductCard: React.FC<IProps> = ({ orderProduct, isOrderSubmitted }) => {
  const dispatch = useDispatch();

  const handleProductCount = useCallback(
    (data: { id: ID; value: number }) => {
      dispatch(
        setOrderProductCount({
          id: data.id,
          value: data.value,
        })
      );
    },
    [dispatch]
  );

  const handleRemove = useCallback(() => {
    dispatch(removeProduct(orderProduct.productId));
  }, [dispatch, orderProduct]);

  return (
    <OrderProductCardTemplate
      orderProduct={orderProduct}
      isOrderSubmitted={isOrderSubmitted}
      onRemoveClick={handleRemove}
      onCountChange={handleProductCount}
    />
  );
};

export default memo(OrderProductCard);
