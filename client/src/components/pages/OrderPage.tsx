import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import OrderPageTemplate from '../templates/OrderPageTemplate';
import OrderProductCard from '../common/OrderProductCard';
import API from '../../api/api';
import { resetOrder, resetProducts } from '../../store/actions/orderSlicer';

const OrderPage: React.FC = () => {
  const dispatch = useDispatch();
  const { user, products, totalPrice } = useSelector((state: RootState) => state.order);

  const { postData } = API;

  const [orderNumber, setOrderNumber] = useState('');

  const orderStatusMessage = useMemo(
    () =>
      !totalPrice
        ? 'Please, select some product!'
        : Object.values(user).some((item) => !item)
        ? 'Please, fill the whole form fields!'
        : 'submit',
    [user, totalPrice]
  );

  const handleSubmit = useCallback(async () => {
    if (orderStatusMessage !== 'submit') return;
    // filter a product without number
    const productsWithNumbers = products.filter((item) => !!item.countOfProduct);
    dispatch(resetProducts(productsWithNumbers));

    const response = await postData('orders', {
      user,
      products: productsWithNumbers,
      totalPrice,
    });
    setOrderNumber(response?.data?.orderId || '');
  }, [orderStatusMessage, products, totalPrice, user, postData, dispatch]);

  useEffect(() => {
    return () => {
      if (!orderNumber) return;
      dispatch(resetOrder());
    };
  }, [orderNumber, dispatch]);

  return (
    <OrderPageTemplate
      content={
        products.length === 0
          ? undefined
          : products.map((orderProduct) => (
              <React.Fragment key={orderProduct.productId}>
                <OrderProductCard
                  orderProduct={orderProduct}
                  isOrderSubmitted={!!orderNumber}
                />
              </React.Fragment>
            ))
      }
      orderNumber={orderNumber}
      totalOrderPrice={totalPrice}
      orderStatusMessage={orderStatusMessage}
      onSubmitClick={handleSubmit}
    />
  );
};

export default OrderPage;
