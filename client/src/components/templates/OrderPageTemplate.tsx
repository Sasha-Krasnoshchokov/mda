import React, { memo } from 'react';

import './templates.styles.css';
import Form from '../common/Form';
import Button from '../common/Button';

interface IProps {
  content?: React.ReactNode;
  totalOrderPrice?: number;
  orderNumber?: string;
  orderStatusMessage?: string;
  onSubmitClick?: () => void;
}

const OrderPageTemplate: React.FC<IProps> = ({
  content,
  totalOrderPrice = 0,
  orderStatusMessage = '',
  orderNumber = '',
  onSubmitClick = () => {},
}) => (
  <div className="page-wrapper">
    <aside
      className="page-aside-wrapper order-page-form-wrapper"
      content="Text"
    >
      <Form />
    </aside>
    <div className="page-content-wrapper order-page-content-wrapper">
      <div className="order-page-number">
        <span>
          Order number: <span>{orderNumber}</span>
        </span>
      </div>
      <div className="scrolling">
        <div className="page-content">{content || 'You did not select any product'}</div>
      </div>
      <div className="order-page-actions">
        <span className="order-page-titles">Total Order price: {totalOrderPrice.toFixed(2)}</span>
        {!orderNumber &&
          (orderStatusMessage === 'submit' ? (
            <div className="order-page-submit">
              <Button
                text="Submit"
                callback={onSubmitClick}
              />
            </div>
          ) : (
            <span className="order-page-message">{orderStatusMessage}</span>
          ))}
      </div>
    </div>
  </div>
);

export default memo(OrderPageTemplate);
