import React, { memo, useCallback } from 'react';

import './templates.styles.css';
import Button from '../common/Button';
import { ID, IOrderProduct, IProduct } from '../../types/types';
import { FormInput } from './FormTemplate';

interface IOrderProps {
  orderProduct: IOrderProduct;
  isOrderSubmitted?: boolean;
  onRemoveClick: () => void;
  onCountChange: (data: { id: ID; value: number }) => void;
}

export const OrderProductCardTemplate: React.FC<IOrderProps> = ({
  orderProduct,
  isOrderSubmitted,
  onRemoveClick,
  onCountChange,
}) => {
  const { label, price, producer, imageUrl } = orderProduct.product;

  const changeNumber = useCallback(
    (data: { productId: ID; value: string }) => {
      onCountChange({ id: data.productId, value: parseInt(data.value || '0') });
    },
    [onCountChange]
  );

  return (
    <div className="card card-order">
      <div className="card-order-image">
        <img
          src={imageUrl}
          alt={label}
          width="100%"
          height="100%"
        />
      </div>
      <div className="card-order-info">
        <div className="width100">
          <div className="card-order-info-title">
            <span>{label}</span>
            <span>{producer}</span>
          </div>
          <p>{price.toFixed(2)}</p>
        </div>
        <div className="card-actions card-order-actions">
          <div className="card-counter-sum">
            <div className="card-counter">
              {!isOrderSubmitted ? (
                <FormInput
                  field={{
                    id: orderProduct.productId,
                    type: 'number',
                    label: '',
                    value: `${orderProduct.countOfProduct || 1}`,
                  }}
                  getInputtedValue={changeNumber}
                />
              ) : (
                <span>Quantity: {orderProduct.countOfProduct || 1}</span>
              )}
            </div>
            <span className="card-sum">Sum: {`${orderProduct.totalSum.toFixed(2)}`}</span>
          </div>
          <div className="card-add-to-order">
            {!isOrderSubmitted && (
              <Button
                text="Remove"
                callback={onRemoveClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface IProps {
  product: IProduct;
  isSelected?: boolean;
  addToOrder?: () => void;
}

const ProductCardTemplate: React.FC<IProps> = ({ product, addToOrder = () => {}, isSelected }) => {
  const { label, price, producer, imageUrl } = product;

  return (
    <div
      className="card"
      data-is-exist={isSelected}
    >
      <div className="card-image-wrapper">
        <img
          src={imageUrl}
          alt={label}
          loading="lazy"
          className="card-image"
        />
      </div>
      <div className="card-info">
        <span>{label}</span>
        <span>{price.toFixed(2)}</span>
      </div>
      <div className="card-info">{producer}</div>
      <div className="card-actions">
        <div />
        <div className="card-add-to-order">
          {isSelected ? (
            <div className="card-exist-in-order">Exist in the order</div>
          ) : (
            <Button
              text="Add to order"
              callback={addToOrder}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCardTemplate);
