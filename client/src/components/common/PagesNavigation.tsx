import React, { memo } from 'react';

import Navigation from '../common/Navigation';
import { IOption } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const tabs: IOption[] = [
  { id: 'shop', label: 'Shop' },
  { id: 'order', label: 'Order' },
];

interface IProps {
  setActiveTab: (item: IOption) => void;
}

const PagesNavigation: React.FC<IProps> = ({ setActiveTab }) => {
  const order = useSelector((state: RootState) => state.order);

  return (
    <>
      <Navigation
        navType="tabs"
        menus={tabs}
        onMenuClick={setActiveTab}
        highlightedMenuId={order.products.length > 0 ? 'order' : ''}
      />
    </>
  );
};

export default memo(PagesNavigation);
